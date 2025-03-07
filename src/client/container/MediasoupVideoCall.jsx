
// mediasoup-react-video-call.js (React Frontend)

import React, { useState, useEffect, useRef } from 'react';
import * as mediasoupClient from 'mediasoup-client';

function MediasoupVideoCall() {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStreams, setRemoteStreams] = useState({});
    const localVideoRef = useRef(null);
    const remoteVideoRefs = useRef({});
    const deviceRef = useRef(null);
    const transportRef = useRef(null);
    const wsRef = useRef(null);
    const producerRef = useRef(null);

    useEffect(() => {
        debugger
    }, [localStream, remoteStreams]);


    useEffect(() => {
        async function init() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                setLocalStream(stream);
                localVideoRef.current.srcObject = stream;

                wsRef.current = new WebSocket('ws://localhost:8050'); // Replace with your server URL

                wsRef.current.onopen = async () => {
                    wsRef.current.send(JSON.stringify({ type: 'getRouterRtpCapabilities' }));
                };

                wsRef.current.onmessage = async (event) => {
                    const message = JSON.parse(event.data);

                    switch (message.type) {
                        case 'routerRtpCapabilities':
                            await loadDevice(message.rtpCapabilities);
                            break;
                        case 'createWebRtcTransport':
                            await createTransport(message.transportOptions, message.transportId);
                            break;
                        case 'connectWebRtcTransport':
                            await connectTransport(message.dtlsParameters);
                            break;
                        case 'producerCreated':
                            producerRef.current = message.producerId;
                            break;
                        case 'newConsumer':
                            await createConsumer(message);
                            break;
                        case 'consumerClosed':
                            removeRemoteStream(message.consumerId);
                            break;
                        default:
                            console.log('Unhandled message:', message);
                    }
                };
            } catch (error) {
                console.error('Error:', error);
            }
        }

        init();

        return () => {
            if (localStream) {
                localStream.getTracks().forEach((track) => track.stop());
            }
            if (wsRef.current) {
                wsRef.current.close();
            }
            if (transportRef.current) {
                transportRef.current.close();
            }
        };
    }, []);

    async function loadDevice(rtpCapabilities) {
        deviceRef.current = new mediasoupClient.Device();
        await deviceRef.current.load({ routerRtpCapabilities: rtpCapabilities });
        wsRef.current.send(JSON.stringify({ type: 'createWebRtcTransport', direction: 'send' }));
        wsRef.current.send(JSON.stringify({ type: 'createWebRtcTransport', direction: 'recv' }));
    }

    async function createTransport(transportOptions, transportId) {
        transportRef.current = deviceRef.current.createSendTransport({
            id: transportId,
            ...transportOptions,
            appData: { producing: true },
        });

        transportRef.current.on('connect', ({ dtlsParameters }, callback, errback) => {
            wsRef.current.send(JSON.stringify({ type: 'connectWebRtcTransport', dtlsParameters, transportId }));
            callback();
        });

        transportRef.current.on('produce', async ({ kind, rtpParameters, appData }, callback, errback) => {
            wsRef.current.send(JSON.stringify({ type: 'createProducer', transportId, kind, rtpParameters, appData }));
            callback({ id: 'dummyProducerId' });
        });

        await connectTransport(transportOptions.dtlsParameters);
        await produce(localStream);
    }

    async function connectTransport(dtlsParameters) {
        if (transportRef.current && !transportRef.current.connectionState) {
            await transportRef.current.connect({ dtlsParameters });
        }
    }

    async function produce(stream) {
        if (transportRef.current) {
            const track = stream.getVideoTracks()[0]; // Or audio
            producerRef.current = await transportRef.current.produce({ track });
        }
    }

    async function createConsumer(consumerData) {
        const transport = deviceRef.current.createRecvTransport(consumerData.transportOptions);
        transport.on('connect', ({ dtlsParameters }, callback, errback) => {
            wsRef.current.send(JSON.stringify({ type: 'connectWebRtcTransport', dtlsParameters, transportId: consumerData.transportOptions.id }));
            callback();
        });
        await transport.connect({ dtlsParameters: consumerData.transportOptions.dtlsParameters });

        const consumer = await transport.consume({
            id: consumerData.consumerId,
            producerId: consumerData.producerId,
            kind: consumerData.kind,
            rtpParameters: consumerData.rtpParameters,
        });
        const { track } = consumer;
        const newRemoteStreams = { ...remoteStreams, [consumerData.consumerId]: new MediaStream([track]) };
        setRemoteStreams(newRemoteStreams);
        remoteVideoRefs.current[consumerData.consumerId] = React.createRef();
        setTimeout(() => {
            if (remoteVideoRefs.current[consumerData.consumerId] && remoteVideoRefs.current[consumerData.consumerId].current) {
                remoteVideoRefs.current[consumerData.consumerId].current.srcObject = new MediaStream([track]);
            }
        }, 100)
    }

    function removeRemoteStream(consumerId) {
        const newRemoteStreams = { ...remoteStreams };
        delete newRemoteStreams[consumerId];
        setRemoteStreams(newRemoteStreams);
    }

    return (
        <div>
            <video ref={localVideoRef} autoPlay muted playsInline />
            {Object.entries(remoteStreams).map(([consumerId, stream]) => (
                <video key={consumerId} ref={remoteVideoRefs.current[consumerId]} autoPlay playsInline />
            ))}
        </div>
    );
}

export default MediasoupVideoCall;
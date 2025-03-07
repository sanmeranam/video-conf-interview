// mediasoup-server.js

const mediasoup = require('mediasoup');
const WebSocket = require('ws');

async function runMediasoupServer() {
    try {
        const worker = await mediasoup.createWorker({
            logLevel: 'warn', // Adjust as needed: 'debug', 'warn', 'error', 'none'
            rtcMinPort: 40000,
            rtcMaxPort: 49999,
        });

        // const router = await worker.createRouter({
        //   mediaCodecs: mediasoup.getSupportedRtpCapabilities().codecs,
        // });
        const router = await worker.createRouter({
            mediaCodecs: [
                {
                    kind: 'audio',
                    mimeType: 'audio/opus',
                    clockRate: 48000,
                    channels: 2
                },
                {
                    kind: 'video',
                    mimeType: 'video/VP8',
                    clockRate: 90000,
                    parameters:
                    {
                        'x-google-start-bitrate': 1000
                    }
                },
                {
                    kind: 'video',
                    mimeType: 'video/VP9',
                    clockRate: 90000,
                    parameters:
                    {
                        'profile-id': 2,
                        'x-google-start-bitrate': 1000
                    }
                },
                {
                    kind: 'video',
                    mimeType: 'video/h264',
                    clockRate: 90000,
                    parameters:
                    {
                        'packetization-mode': 1,
                        'profile-level-id': '4d0032',
                        'level-asymmetry-allowed': 1,
                        'x-google-start-bitrate': 1000
                    }
                },
                {
                    kind: 'video',
                    mimeType: 'video/h264',
                    clockRate: 90000,
                    parameters:
                    {
                        'packetization-mode': 1,
                        'profile-level-id': '42e01f',
                        'level-asymmetry-allowed': 1,
                        'x-google-start-bitrate': 1000
                    }
                }
            ]
        });

        const transports = new Map();
        const producers = new Map();
        const consumers = new Map();
        const peers = new Map(); // Store peer information (ws, transports)

        const wss = new WebSocket.Server({ port: 8050 }); // Replace with your desired port

        wss.on('connection', async (ws) => {
            const peerId = generatePeerId(); // Generate a unique ID for the peer
            peers.set(peerId, { ws, transports: new Map() }); // store ws and transports related to peer.

            console.log(`Peer ${peerId} connected`);

            ws.on('message', async (message) => {
                try {
                    const data = JSON.parse(message);

                    switch (data.type) {
                        case 'getRouterRtpCapabilities':
                            ws.send(JSON.stringify({ type: 'routerRtpCapabilities', rtpCapabilities: router.rtpCapabilities }));
                            break;
                        case 'createWebRtcTransport':
                            const transport = await router.createWebRtcTransport({
                                listenIps: [{ ip: '0.0.0.0' }], // Replace with your public IP if needed
                                enableUdp: true,
                                enableTcp: true,
                                preferUdp: true,
                            });

                            transports.set(transport.id, transport);
                            peers.get(peerId).transports.set(transport.id, transport); // Store transport per peer.

                            ws.send(JSON.stringify({
                                type: 'createWebRtcTransport',
                                transportOptions: {
                                    id: transport.id,
                                    iceParameters: transport.iceParameters,
                                    iceCandidates: transport.iceCandidates,
                                    dtlsParameters: transport.dtlsParameters,
                                },
                                transportId: transport.id,
                            }));
                            break;
                        case 'connectWebRtcTransport':
                            const transportToConnect = transports.get(data.transportId);
                            if (transportToConnect) {
                                await transportToConnect.connect({ dtlsParameters: data.dtlsParameters });
                                ws.send(JSON.stringify({ type: 'connectWebRtcTransport', success: true }));
                            }
                            break;
                        case 'createProducer':
                            const producer = await transports.get(data.transportId).produce({
                                kind: data.kind,
                                rtpParameters: data.rtpParameters,
                            });

                            producers.set(producer.id, producer);
                            ws.send(JSON.stringify({ type: 'producerCreated', producerId: producer.id }));

                            broadcastNewProducer(peerId, producer.id, producer.kind, producer.rtpParameters, data.transportId); // Broadcast to other peers
                            break;
                        case 'createConsumer':
                            try {
                                const consumer = await transports.get(data.transportId).consume({
                                    producerId: data.producerId,
                                    rtpCapabilities: router.rtpCapabilities,
                                });

                                consumers.set(consumer.id, consumer);

                                ws.send(JSON.stringify({
                                    type: 'consumerCreated',
                                    consumerId: consumer.id,
                                    producerId: data.producerId,
                                    kind: consumer.kind,
                                    rtpParameters: consumer.rtpParameters,
                                    transportOptions: {
                                        id: data.transportId,
                                        iceParameters: transports.get(data.transportId).iceParameters,
                                        iceCandidates: transports.get(data.transportId).iceCandidates,
                                        dtlsParameters: transports.get(data.transportId).dtlsParameters,
                                    }
                                }));
                            } catch (e) {
                                console.error("Error creating consumer", e);
                                ws.send(JSON.stringify({ type: "consumerError", error: e.toString() }));
                            }
                            break;
                        case 'closeConsumer':
                            const consumerToClose = consumers.get(data.consumerId);
                            if (consumerToClose) {
                                consumerToClose.close();
                                consumers.delete(data.consumerId);
                                broadcastConsumerClosed(data.consumerId);
                            }
                            break;
                        default:
                            console.log('Unhandled message:', data);
                    }
                } catch (error) {
                    console.error('Error processing message:', error);
                    ws.send(JSON.stringify({ type: 'error', error: error.message }));
                }
            });

            ws.on('close', () => {
                console.log(`Peer ${peerId} disconnected`);
                closePeer(peerId);
            });
        });

        function broadcastNewProducer(senderPeerId, producerId, kind, rtpParameters, transportId) {
            for (const [peer, peerData] of peers.entries()) {
                if (peer !== senderPeerId) {
                    peerData.ws.send(JSON.stringify({
                        type: 'newConsumer',
                        producerId,
                        kind,
                        rtpParameters,
                        transportId,
                    }));
                }
            }
        }

        function broadcastConsumerClosed(consumerId) {
            for (const [peer, peerData] of peers.entries()) {
                peerData.ws.send(JSON.stringify({ type: "consumerClosed", consumerId: consumerId }));
            }
        }

        function closePeer(peerId) {
            const peerData = peers.get(peerId);
            if (peerData) {
                // Close transports
                for (const transport of peerData.transports.values()) {
                    transport.close();
                    transports.delete(transport.id);
                }
                // Close producers
                for (const producer of producers.values()) {
                    if (producer.appData.peerId === peerId) {
                        producer.close();
                        producers.delete(producer.id);
                    }
                }
                peers.delete(peerId);
            }
        }

        function generatePeerId() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }

        console.log('Mediasoup server started on port 8080');
    } catch (error) {
        console.error('Error starting mediasoup server:', error);
    }
}

runMediasoupServer();
import React, { use, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import SimplePeer from "simple-peer";

// get current host url
const host = window.location.origin;
const socket = io(host);


const Video = ({ peer }) => {
    const ref = useRef();

    useEffect(() => {
        peer.on("stream", (stream) => {
            ref.current.srcObject = stream;
        });
    }, [peer]);

    return <video ref={ref} autoPlay playsInline />;
};

export default function VideoPage({ roomId = "123" }) {
    const localMedia = useRef(null);
    const [stream, setStream] = useState(null);
    const [peers, setPeers] = useState([]);
    const userVideo = useRef();
    const peersRef = useRef([]);
    const [turnDetails, setTurnDetails] = useState(null);


    useEffect(() => {

        (async () => {
            const data = await (await fetch("/api/v1/get-turn")).json();
            setTurnDetails([
                { urls: "stun:stun.l.google.com:19302" },
                ...data.iceServers
            ]);
        })();

    }, []);

    useEffect(() => {
        if (!turnDetails) return;

        if (!window.crypto) {
            window.crypto = {
                getRandomValues: function (buffer) {
                    for (let i = 0; i < buffer.length; i++) {
                        buffer[i] = Math.floor(Math.random() * 256);
                    }
                },
            };
        }

        const myUserId = `user_${Math.floor(Math.random() * 1000000000000)}`;
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
            localMedia.current.srcObject = mediaStream;
            setStream(mediaStream);

            socket.emit("join-room", roomId, myUserId);

            socket.on("user-connected", (userId) => {
                const peer = createPeer(userId, myUserId, mediaStream);
                peersRef.current.push({ peerID: userId, peer });
                setPeers((users) => [...users, peer]);
            });

            socket.on("offer", (data) => {
                const peer = addPeer(data, mediaStream);
                peersRef.current.push({ peerID: data.from, peer });
                setPeers((users) => [...users, peer]);
            });

            socket.on("answer", (data) => {
                const peer = peersRef.current.find((p) => p.peerID === data.from);
                if (peer) peer.peer.signal(data.signal);
            });

            socket.on("ice-candidate", (data) => {
                const peer = peersRef.current.find((p) => p.peerID === data.from);
                if (peer) peer.peer.signal(data.candidate);
            });

            socket.on("user-disconnected", (userId) => {
                const peerObj = peersRef.current.find((p) => p.peerID === userId);
                if (peerObj) {
                    peerObj.peer.destroy();
                    setPeers((users) => users.filter((p) => p !== peerObj.peer));
                }
            });
        }).catch((err) => {
            console.log(err);
        });

        return () => {
            socket.off("user-connected");
            socket.off("offer");
            socket.off("answer");
            socket.off("ice-candidate");
            socket.off("user-disconnected");
        };
    }, [roomId, turnDetails]);


    function createPeer(userToSignal, callerID, stream) {
        const peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream,
            debug: true,
            config: {
                iceServers: turnDetails
            }
        });

        peer.on("signal", (signal) => {
            socket.emit("offer", { signal, from: callerID, to: userToSignal, roomId });
        });

        return peer;
    }

    function addPeer(incomingData, stream) {
        const peer = new SimplePeer({
            initiator: false,
            trickle: false,
            stream,
            debug: true,
            config: {
                iceServers: turnDetails
            }
        });

        peer.on("signal", (signal) => {
            socket.emit("answer", { signal, from: myUserId, to: incomingData.from, roomId });
        });

        peer.signal(incomingData.signal);
        return peer;
    }


    return (
        <div>
            <h2>Video Conference</h2>
            <video ref={localMedia} autoPlay playsInline></video>
            {/* <button onClick={startStreaming}>Start Streaming</button> */}

            <h3>Remote Video</h3>
            {peers.map((peer, index) => (
                <Video key={index} peer={peer} />
            ))}
        </div>
    );
}

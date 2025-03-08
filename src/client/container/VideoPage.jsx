import React, { use, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
// import SimplePeer from "simple-peer";

// get current host url
const host = window.location.hostname;
const socket = io();


const Video = ({ peer }) => {
    const ref = useRef();

    useEffect(() => {
        ref.current.srcObject = peer;
    }, [peer]);

    return <video ref={ref} autoPlay playsInline />;
};



export default function VideoPage({ roomId = "123" }) {
    const localMedia = useRef(null);
    // const [stream, setStream] = useState(null);
    const [peers, setPeers] = useState({});
    // const userVideo = useRef();
    const peersRef = useRef([]);
    const peer = useRef(null);



    const getUniqueId = () => {
        return Math.round(Math.random() * 9999999999).toString(16) + '-' + roomId;
    };


    useEffect(() => {
        if (!window.crypto) {
            window.crypto = {
                getRandomValues: function (buffer) {
                    for (let i = 0; i < buffer.length; i++) {
                        buffer[i] = Math.floor(Math.random() * 256);
                    }
                },
            };
        }

        peer.current = new Peer(getUniqueId(), {
            host: 'call.tefiti.in',
            port: 443,
            secure: true,
            path: "/server",
            debug: 0,
            config: {
                iceServers: [
                    { urls: "stun:stun.l.google.com:19302" },
                    {
                        url: "stun:global.stun.twilio.com:3478",
                        urls: "stun:global.stun.twilio.com:3478",
                    },
                    {
                        credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
                        url: "turn:global.turn.twilio.com:3478?transport=udp",
                        urls: "turn:global.turn.twilio.com:3478?transport=udp",
                        username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca",
                    },
                    {
                        credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
                        url: "turn:global.turn.twilio.com:3478?transport=tcp",
                        urls: "turn:global.turn.twilio.com:3478?transport=tcp",
                        username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca",
                    },
                    {
                        credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
                        url: "turn:global.turn.twilio.com:443?transport=tcp",
                        urls: "turn:global.turn.twilio.com:443?transport=tcp",
                        username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca",
                    },
                ]
            }
        });

        peer.current.socket.send({
            type: "join-room",
            roomId: roomId,
            userId: peer.current.id,
        });

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
            localMedia.current.srcObject = mediaStream;
            socket.emit("join-room", roomId, peer.current.id);

            peer.current.on("call", (call) => {
                call.answer(mediaStream);
                call.on("stream", (stream) => {
                    const _peers = { ...peers };
                    _peers[call.peer] = stream;
                    setPeers(_peers);
                });
            });

            socket.on("user-connected", (userId) => {
                if (userId === peer.current.id) return;
                const call = peer.current.call(userId, mediaStream);
                call.on("stream", (userStream) => {
                    const _peers = { ...peers };
                    _peers[userId] = userStream;
                    setPeers(_peers);
                });
                call.on("close", () => {
                    const _peers = { ...peers };
                    delete _peers[userId];
                    setPeers(_peers);
                });
            });

            socket.on("user-disconnected", (userId) => {
                const _peers = { ...peers };
                delete _peers[userId];
                setPeers(_peers);
            });
        }).catch((err) => {
            console.log(err);
        });

        return () => {
            peer.current.destroy();
        };
    }, [roomId]);


    return (
        <div>
            <h2>Video Conference</h2>
            <video ref={localMedia} autoPlay playsInline></video>
            <h3>Remote Video</h3>
            {Object.entries(peers).map(([key, value]) => (
                <Video key={key} peer={value} />
            ))}
        </div>
    );
}

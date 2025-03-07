const mediasoup = require("mediasoup");

let worker;
let router;
let transport;
let producer;
let consumer;

async function startMediasoup() {
    worker = await mediasoup.createWorker();
    router = await worker.createRouter({
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

    console.log("✅ Mediasoup Worker & Router started");
}





module.exports = (io) => {

    io.on("connection", (socket) => {
        console.log("🔗 New client connected:", socket.id);


        socket.on("createTransport", async (_, callback) => {
            transport = await router.createWebRtcTransport({
                listenIps: [{ ip: "127.0.0.1", announcedIp: null }],
                enableUdp: true,
                enableTcp: true,
                preferUdp: true,
            });

            callback({
                id: transport.id,
                iceParameters: transport.iceParameters,
                iceCandidates: transport.iceCandidates,
                dtlsParameters: transport.dtlsParameters,
            });
        });

        socket.on("sendTrack", async ({ kind, rtpParameters }, callback) => {
            producer = await transport.produce({ kind, rtpParameters});
            callback(producer.id);
        });

        socket.on("receiveTrack", async (_, callback) => {
            if (!producer) return console.error("❌ No producer available");
            consumer = await transport.consume({
                producerId: producer.id,
                rtpCapabilities: router.rtpCapabilities,
                paused: false,
            });

            callback({
                id: consumer.id,
                kind: consumer.kind,
                rtpParameters: consumer.rtpParameters,
            });
        });

        socket.on("disconnect", () => console.log("❌ Client disconnected:", socket.id));
    });

    startMediasoup();
}
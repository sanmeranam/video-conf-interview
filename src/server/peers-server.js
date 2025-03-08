const { ExpressPeerServer } = require("peer");
const twilio = require('twilio');
const WebSocket = require('ws');
const expressWs = require('express-ws');
const getTurnServer = async () => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    return client.tokens.create()
}

module.exports = async (server, app) => {

    const peerServer = ExpressPeerServer(app, {
        path: '/app',
        // allow_discovery: true,
        // proxied: true,
        // key: 'peerjs',
        // config: {
        //     iceServers: [
        //         // { urls: 'stun:stun.l.google.com:19302' },
        //         ...result.iceServers,
        //     ],
        // }
        createWebSocketServer: ({
            server: _server,
            path: _path,
        }) => {
            const ins = expressWs(app, server, {
                wsOptions: {
                    path: _path
                }
            });
            const wss = ins.getWss();
            return wss;
        }
    });

    peerServer.on('connection', ({
        id,
        token,
        socket,
    }) => {
        console.log('🔌 New client connected');
        socket.on('message', (msg) => {
            debugger
            const data = JSON.parse(msg);
            console.log('📦 Message:', data);
        });
    }
    );
    peerServer.on('disconnect', (client) => {
        console.log('🔌 Client disconnected');
    }
    );

    peerServer.on('error', (err) => {
        console.log('❌ Error:', err);
    }
    );

    app.use('/call-server', peerServer);
}
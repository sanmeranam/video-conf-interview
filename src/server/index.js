/* eslint-disable no-undef */
const { resolve, join } = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require("http");
const socketIo = require("socket.io");
const peerServer = require('./peers-server');


const apiV1Router = require('./api/route');
// const streamServer = require('./services/streamHandler');
const myServer = require('./services/myServer');

const app = express();
app.use(express.urlencoded({ extended: false })); // Handles post requests
app.use(express.json());
app.use(cors());
app.use(express.static(join(__dirname, 'public')));

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });


(async () => {
    myServer(io);
    // await peerServer(server, app);
    
    // app.use('/api/v1', apiV1Router);

    const PORT = process.env.PORT || 3300;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
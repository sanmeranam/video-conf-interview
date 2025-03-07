const express = require('express');
const { AccessToken } = require('livekit-server-sdk');
const twilio = require("twilio");
const router = express.Router();

const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_URL || "ws://localhost:7880";

router.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

router.post('/get-token', async (req, res) => {
    const { username, room } = req.body;
    if (!username || !room) {
        return res.status(400).json({ error: "Missing username or room" });
    }

    const at = new AccessToken(API_KEY, API_SECRET, {
        identity: username,
        ttl: '10m',
    });
    at.addGrant({ roomJoin: true, room: room });
    const token = await at.toJwt();

    res.json({ token, room, username, livekitUrl: LIVEKIT_URL });
});



router.get('/get-turn', async (req, res) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    res.json(await client.tokens.create());
});



module.exports = router;



const rooms = {};

module.exports = (io) => {

    io.on("connection", (socket) => {
        console.log("🔌 New client connected");


        socket.on("join-room", (roomId, userId) => {
            if(!rooms[roomId]) {
                rooms[roomId] = new Set();
            }
            rooms[roomId].add(userId);

            socket.join(roomId);
            socket.to(roomId).emit("user-connected", userId);

            socket.on("disconnect", () => {
                rooms[roomId].delete(userId);
                socket.to(roomId).emit("user-disconnected", userId);
            });
        });

        // Handle WebRTC signaling
        // socket.on("offer", (data) => {
        //     socket.to(data.roomId).emit("offer", data);
        // });

        // socket.on("answer", (data) => {
        //     socket.to(data.roomId).emit("answer", data);
        // });

        // socket.on("ice-candidate", (data) => {
        //     socket.to(data.roomId).emit("ice-candidate", data);
        // });


        socket.on("disconnect", () => {
            console.log("🔌 Client disconnected");
        });
    });

    console.log("✅ Socket.io server started");

};
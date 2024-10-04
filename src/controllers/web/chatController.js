module.exports = (socket, io) => {
  socket.on("chat message", (msg) => {
    console.log(`Message from ${socket.user}: ${msg}`);

    io.emit("chat message", { user: socket.user, msg: msg });
  });
};

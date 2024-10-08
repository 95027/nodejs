const { Server } = require("socket.io");
const socketMiddleware = require("../src/middlewares/web/socketMiddleware");
const {chatMessages} = require('../src/controllers/web/chatController');

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  });

  io.use(socketMiddleware);

  io.on("connection", (socket) => {
    console.log(`${socket.user} connected`);

    chatMessages(socket, io);

    socket.on("disconnect", () => {
      console.log(`${socket.user} disconnected`);
    });
  });
};

const { Server } = require("socket.io");
const chatController = require("../src/controllers/web/chatController");
const socketMiddleware = require("../src/middlewares/web/socketMiddleware");

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.use(socketMiddleware);

  io.on("connection", (socket) => {
    console.log(`${socket.user} connected`);

    chatController(socket, io);

    socket.on("disconnect", () => {
      console.log(`${socket.user} disconnected`);
    });
  });
};

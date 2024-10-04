const express = require("express");
const routes = require("./src/routes");
require("dotenv").config();
const errorHandler = require("./src/middlewares/errorHandler");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('./config/socket');

io(server);

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  allowedHeaders: "Content-Type, Authorization, Set-Cookie",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use("/v1", routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is runnung on ${PORT}`);
});

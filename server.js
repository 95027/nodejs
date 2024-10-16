const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const http = require('http');
const server = http.createServer(app);
const io = require('./config/socket');
const errorHandler = require("./src/middlewares/errorHandler");
const routes = require("./src/routes");

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

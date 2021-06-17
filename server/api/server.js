const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = server;

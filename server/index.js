require("dotenv").config();
const express = require("express");

const server = require("./api/server");

const PORT = process.env.PORT || 3001;



server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

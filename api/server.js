const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restricted = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const requestsRouter = require("../requests/requests-router.js");
const questionsRouter = require("../questions/questions-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Sanity Check" });
});

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/requests", restricted, requestsRouter);
server.use("/api/questions", restricted, questionsRouter);

module.exports = server;

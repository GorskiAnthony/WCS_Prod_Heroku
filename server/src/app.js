const path = require("path");
const express = require("express");
const app = express();
const logger = require("morgan");
const router = require("../router/index");
const cors = require("cors");

const frontend = path.join(__dirname, "..", "..", "client", "dist");

app.use(logger("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.static(frontend));

app.use("/api", router);

/**
 * @description - This is the entry point for the server, redirects to the frontend.
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(frontend, "index.html"));
});

module.exports = app;

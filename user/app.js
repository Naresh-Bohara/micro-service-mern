const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes  = require("./routes/user.routes");

app.use(express.json());

app.use("/", userRoutes);

module.exports = app
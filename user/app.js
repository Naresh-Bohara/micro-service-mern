const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./db/db")
connectDB();
const userRoutes  = require("./routes/user.routes");
const cookie = require("cookie-parser");


app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({extended: true}))

app.use("/", userRoutes);

module.exports = app
const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/authMiddleWare");

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.get("/profile", authMiddleware.userAuth, userController.profile);

module.exports = userRouter;

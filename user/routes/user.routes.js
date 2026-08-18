const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller")
const authMiddleware = require("../middleware/authMiddleWare")

userRouter.post("/register",  userController.register);
userRouter.post("/login",  userController.login);
userRouter.post("/logout",  userController.logout);
userRouter.post("/profile",  authMiddleware.userAuth, userController.profile);

module.exports = userRouter; 
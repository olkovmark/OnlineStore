import { Router } from "express";
import userController from "../controllers/userController.js";

export const userRouter = new Router();

userRouter.post("/regestration", userController.regestration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", userController.auth);

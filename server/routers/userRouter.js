import { Router } from "express";

export const userRouter = new Router();

userRouter.post("/regestration", (req, res) => {
  res.status(200).json({ message: "ok" });
  console.log("message");
});
userRouter.post("/login", (req, res) => {
  res.status(200).json({ message: "ok" });
  console.log("message");
});
userRouter.get("/auth", (req, res) => {
  res.status(200).json({ message: "ok" });
  console.log("message");
});

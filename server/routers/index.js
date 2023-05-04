import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { catalogRouter } from "./catalogRouter.js";

const router = new Router();

router.use("/user", userRouter);
router.use("/catalog", catalogRouter);

export default router;

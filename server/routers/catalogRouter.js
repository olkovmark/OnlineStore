import { Router } from "express";
import catalogController from "../controllers/catalogController.js";

export const catalogRouter = new Router();

catalogRouter.post("", catalogController.create);
catalogRouter.get("", catalogController.getALL);

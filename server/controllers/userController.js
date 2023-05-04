import { json } from "sequelize";
import ApiError from "../error/apiError.js";

class UserController {
  async login(req, res) {}

  async auth(req, res, next) {
    const { id } = req.query;

    if (!id) return next(ApiError.badRequest("No ID"));
    res.status(200).json({ message: "ok" });
  }

  async regestration(req, res) {}
}

export default new UserController();

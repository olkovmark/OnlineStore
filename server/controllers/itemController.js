import ApiError from "../error/apiError.js";
import { Catalog } from "../models/models.js";

class ItemController {
  async create(req, res, next) {
    const { name, parent_id } = req.body;

    if (!name) return next(ApiError.badRequest("No name"));

    try {
      const catalog = await Catalog.create({ name, parent_id });
      return res.status(200).json(catalog);
    } catch (error) {
      return next(ApiError.badRequest("Bad request"));
    }
  }

  async getAll(req, res, next) {
    try {
      const { parent_id } = req.body;
      const catalogs = await Catalog.findAll({ where: { parent_id } });
      console.log(catalogs);
      return res.status(200).json(catalogs);
    } catch (error) {
      return next(ApiError.badRequest("Bad request"));
    }
  }
  async get(req, res, next) {
    try {
      const { parent_id } = req.body;
      const catalogs = await Catalog.findAll({ where: { parent_id } });
      console.log(catalogs);
      return res.status(200).json(catalogs);
    } catch (error) {
      return next(ApiError.badRequest("Bad request"));
    }
  }
}

export default new CatalogController();

import { DataTypes } from "sequelize";
import { seguelize } from "../db.js";

const User = seguelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = seguelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
});
const Catalog = seguelize.define("catalog", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  parent_id: {
    type: DataTypes.INTEGER,
    references: { model: "catalogs", key: "id" },
  },
});
const Item = seguelize.define("Item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  brand: { type: DataTypes.STRING, defaultValue: "noBrand" },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
  catalog_id: {
    type: DataTypes.INTEGER,
    references: { model: Catalog, key: "id" },
  },
});

const BasketItem = seguelize.define("basket_item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  basket_id: {
    type: DataTypes.INTEGER,
    references: { model: Basket, key: "id" },
  },
  item_id: { type: DataTypes.INTEGER, references: { model: Item, key: "id" } },
});

const ItemParametry = seguelize.define("item_parametry", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  item_id: { type: DataTypes.INTEGER, references: { model: Item, key: "id" } },
});

const Rating = seguelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  item_id: { type: DataTypes.INTEGER, references: { model: Item, key: "id" } },
  user_id: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
});

export default {
  User,
  Basket,
  BasketItem,
  Item,
  ItemParametry,
  Catalog,
  Rating,
};

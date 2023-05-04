import * as dotenv from "dotenv";
import models from "./models/models.js";
import express from "express";
import { seguelize } from "./db.js";
import router from "./routers/index.js";
import cors from "cors";

import ErrorMidlewar from "./middleware/ErrorMidlewar.js";
import { Sequelize } from "sequelize";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(ErrorMidlewar);

const start = async () => {
  try {
    await seguelize.authenticate();
    // await seguelize.sync();
    app.listen(process.env.PORT, (e) =>
      console.log("Start:", process.env.PORT)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

import * as dotenv from "dotenv";
dotenv.config();
import models from "./models/models.js";
import express from "express";
import { seguelize } from "./db.js";
import router from "./routers/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    // await seguelize.authenticate();
    // await seguelize.sync();
    app.listen(process.env.PORT, (e) =>
      console.log("Start:", process.env.PORT)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

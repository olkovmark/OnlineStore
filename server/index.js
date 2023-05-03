import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { seguelize } from "./db.js";
const app = express();

const start = async () => {
  try {
    await seguelize.authenticate();
    await seguelize.sync();
    // app.listen(process.env.PORT, (e) => console.log("Start"));
  } catch (error) {
    console.log(error);
  }
};

start();

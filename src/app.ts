import express, { json } from "express";
import "express-async-errors"
import "dotenv/config";

export const app = express();

app.use(json());

app.use("/cars");

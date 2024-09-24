import express, { json } from "express";
import "express-async-errors"
import "dotenv/config";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { carRouter } from "./routes/car.routes";

export const app = express();

app.use(json());

app.use("/cars", carRouter);

app.use(handleErrors);
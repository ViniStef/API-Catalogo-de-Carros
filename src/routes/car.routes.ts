import { Router } from "express";
import { bodyIsValid } from "../middlewares/BodyIsValid.middleware";
import { CarController } from "../controllers/car.controller";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schema";

export const carRouter = Router();

const carController = new CarController();

carRouter.get("", carController.getMultipleCars);
carRouter.get("/:id", carController.getOneCar);
carRouter.post("", bodyIsValid.execute(carCreateSchema), carController.createCar);
carRouter.patch("/:id", bodyIsValid.execute(carUpdateSchema), carController.updateCar);
carRouter.delete("/:id", carController.deleteCar);
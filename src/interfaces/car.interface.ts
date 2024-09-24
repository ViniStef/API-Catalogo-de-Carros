import { z } from "zod";
import {
    carCreateSchema,
    carUpdateSchema,
    carSchema,
} from "../schemas/car.schema";

type Car = z.infer<typeof carSchema>;
type CarCreate = z.infer<typeof carCreateSchema>;
type carUpdate = z.infer<typeof carUpdateSchema>;

export { Car, CarCreate, carUpdate };

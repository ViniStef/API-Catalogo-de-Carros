import { z } from "zod";

const carSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  brand: z.string(),
  year: z.number(),
  km: z.number(),
  color: z.string().nullish(),
});

const carCreateSchema = carSchema.omit({ id: true });
const carUpdateSchema = carCreateSchema.partial({
  name: true,
  brand: true,
  year: true,
  km: true,
});

export { carSchema, carCreateSchema, carUpdateSchema };

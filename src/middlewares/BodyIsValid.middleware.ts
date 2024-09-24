import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

class BodyIsValid {
    public execute =(schema: ZodSchema) => 
        (req: Request, res: Response, next: NextFunction): void => {
            req.body = schema.parse(req.body);

            return next();
    }
}

export const bodyIsValid = new BodyIsValid();
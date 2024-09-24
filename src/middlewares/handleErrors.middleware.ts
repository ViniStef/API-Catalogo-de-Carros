import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/app.error";

class HandleErrors {
    public static execute = (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): Response => {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.flatten().fieldErrors })
        } 
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message })
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const handleErrors = HandleErrors.execute;
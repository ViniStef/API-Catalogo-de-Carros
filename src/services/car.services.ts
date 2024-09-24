import { prisma } from "../database/prisma";
import { AppError } from "../errors/app.error";
import { Car, CarCreate, carUpdate } from "../interfaces/car.interface";
import { carSchema } from "../schemas/car.schema";

export class CarServices {

    create = async (data: CarCreate): Promise<Car> => {
        const car = await prisma.car.create({ data: data });
        return car;
    };

    getOne = async (carId: string): Promise<Car | null> => {
        const uniqueCar = await prisma.car.findFirst({ where: { id: carId } });
        if (uniqueCar) {
            return carSchema.parse(uniqueCar);
        } else {
            throw new AppError(404, `Could not find any car with the id ${carId}.`);
        }
    };

    getMultiple = async (): Promise<Array<Car>> => {
        const cars = await prisma.car.findMany();
        return cars;
    };

    update = async (carId: string, data: carUpdate): Promise<Car> => {
        try {
            const updatedCar = await prisma.car.update({
                where: { id: carId },
                data: data,
            });
            return carSchema.parse(updatedCar);
        } catch (error) {
            throw new AppError(404, `Could not find any car with the id ${carId}.`);
        }
    };

    delete = async (carId: string): Promise<string> => {
        try {
            await prisma.car.delete({ where: { id: carId } });
            return "Car was deleted successfully";
        } catch (error) {
            throw new AppError(404, `Could not find any car with the id ${carId}.`);
        }
    };

};
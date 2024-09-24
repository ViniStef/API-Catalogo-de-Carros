import { Request, Response } from 'express';
import { CarServices } from './../services/car.services';

export class carController {
    private carService = new CarServices();

    create = async (req: Request, res: Response): Promise<Response> => {
        const newCar = await this.carService.create(req.body);

        return res.status(201).json(newCar);   
    }

    getOne = async (req: Request, res: Response): Promise<Response> => {
        const car = await this.carService.getOne(req.params.id);
        
        return res.status(200).json(car);
    }

    getMultiple = async (req: Request, res: Response): Promise<Response> => {
        const cars = await this.carService.getMultiple();

        return res.status(200).json(cars);
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const updatedCar = await this.carService.update(req.params.id, req.body);

        return res.status(200).json(updatedCar);
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const deletedCar = await this.carService.delete(req.params.id);

        return res.status(204).json(deletedCar);
    }
}
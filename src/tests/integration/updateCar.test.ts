import { CarController } from './../../controllers/car.controller';
import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prisma";
import { updatedCar, invalidUpdatedCar, validCar } from "../mocks/services.mock";
import { Car } from '../../interfaces/car.interface';

describe("PATCH /cars/:id", () => {
    const request = supertest(app);
    const endpoint = "/cars";
  
    let createdCar: Car;
  
  
    beforeEach(async () => {
      await prisma.$transaction([prisma.car.deleteMany()]);
      createdCar = await prisma.car.create({ data: validCar });
    });

    afterAll(async () => {
        await prisma.$disconnect();
      });
  
    test("Should be able to update a car successfully", async () => {
        const idParameter = `${endpoint}/${createdCar.id}`; 

        const response =await request.patch(idParameter).send(updatedCar);

        const expectedValues = ({
            id: createdCar.id,
            name: updatedCar.name,
            description: createdCar.description,
            brand: createdCar.brand,
            year: updatedCar.year,
            km: createdCar.km,
            color: createdCar.color
        });
  
        expect(response.body).toEqual(expectedValues);
        expect(response.status).toBe(200);
    });

    test("Should not be able to update a car with invalid data types", async () => {
        const idParameter = `${endpoint}/${createdCar.id}`; 
        const response =await request.patch(idParameter).send(invalidUpdatedCar);

        expect(response.status).toBe(400);
    })
});

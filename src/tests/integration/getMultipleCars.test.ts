import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prisma";
import { validMultipleCars } from "../mocks/services.mock";
import { CarCreate } from "../../interfaces/car.interface";

describe("GET /cars", () => {
    const request = supertest(app);
    const endpoint = "/cars";
  
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
  
    afterAll(async () => {
        await prisma.$disconnect(); 
    });
  
    test("Should successfully get multiple cars", async () => {
        await prisma.car.createMany({ data: validMultipleCars });
  
        const response = await request.get(endpoint);

        const expectedValues = validMultipleCars.map((car: CarCreate) => ({
            id: expect.any(String),
            name: car.name,
            description: car.description,
            brand: car.brand,
            year: car.year,
            km: car.km,
            color: car.color
        }));
  
        expect(response.body).toEqual(expectedValues);
        expect(response.status).toBe(200);
    });
});

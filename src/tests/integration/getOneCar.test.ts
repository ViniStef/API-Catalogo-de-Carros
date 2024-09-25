import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prisma";
import { validCar } from "../mocks/services.mock";

describe("GET /cars/:id", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect(); 
  });

  test("Should be able to get a car by id successfully", async () => {
    const createdCar = await prisma.car.create({ data: validCar });
    const idParameter = `${endpoint}/${createdCar.id}`; 

    const response = await request.get(idParameter);

    const expectedValue = {
      id: expect.any(String), 
      name: validCar.name,
      description: validCar.description,
      brand: validCar.brand,
      year: validCar.year,
      km: validCar.km,
      color: validCar.color
    };

    expect(response.body).toEqual(expectedValue);
    expect(response.status).toBe(200);
  });
});

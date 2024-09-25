import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prisma"; 
import { invalidCarKey, validCar } from "../mocks/services.mock";

describe("POST /cars", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("Should be able to create a car", async () => {
    const response = await request.post(endpoint).send(validCar);

    const expectedResponseBody = {
      id: expect.any(String),
      name: validCar.name,
      description: validCar.description,
      brand: validCar.brand,
      year: validCar.year,
      km: validCar.km,
      color: validCar.color
    };

    expect(response.body).toEqual(expectedResponseBody);
    expect(response.status).toBe(201);
  });

  test("Should not be able to create a car with invalid data types", async () => {
    const response = await request.post(endpoint).send(invalidCarKey);

    expect(response.status).toBe(400);
  });
  
  test("Should not be able to create a car missing body parameters", async () => {
    const response = await request.post(endpoint); 

    expect(response.status).toBe(400);
  });
});

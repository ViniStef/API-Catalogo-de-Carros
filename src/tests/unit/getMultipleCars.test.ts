import { prisma } from "../../database/prisma"; 
import { CarServices } from "../../services/car.service";
import { validMultipleCars } from "../mocks/services.mock"; 

describe("Unit Test: Get Multiple Cars", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should successfully get multiple cars", async () => {
    await prisma.car.createMany({ data: validMultipleCars });

    const receivedValue = await services.getMultiple();

    const expectedValue = [
      {
        id: expect.any(String),
        name: "Valid Car 1",
        description: "This car has a valid description! Car 1",
        brand: "BMW",
        year: 2021,
        km: 200,
        color: "teal"
      },
      {
        id: expect.any(String),
        name: "Valid Car 2",
        description: "This car has a valid description! Car 2",
        brand: "Hyundai",
        year: 2023,
        km: 477,
        color: "blue"
      },
    ];

    expect(receivedValue).toEqual(expectedValue);
  });
});

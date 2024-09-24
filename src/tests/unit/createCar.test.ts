import { prisma } from "../../database/prisma"; 
import { CarServices } from "../../services/car.service";
import { validCar } from "../mocks/services.mock";

describe("Unit Test: Create Car", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("should be able to create a car successfully", async () => {
    const receivedValue = await services.create(validCar);

    const expectedValue = {
      id: expect.any(String), 
      name: validCar.name,
      description: validCar.description,
      brand: validCar.brand,
      year: validCar.year,
      km: validCar.km,
      color: validCar.color
    };

    expect(receivedValue).toEqual(expectedValue);
  });
});

import { prisma } from "../../database/prisma";
import { Car } from "../../interfaces/car.interface";
import { CarServices } from "../../services/car.service";
import {
  updatedCar,
  validCar,
} from "../mocks/services.mock";

describe("Unit Tests: Update Car", () => {
  let services: CarServices;
  let createdCar: Car;

  beforeAll(() => {
    services = new CarServices();
  });

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
    createdCar = await prisma.car.create({ data: validCar });
  });

  test("Should successfully update a car by id", async () => {
    const updatedCarData = updatedCar;

    const receivedValue = await services.update(createdCar.id, updatedCarData);

    const expectedValue = {
      id: createdCar.id,
      name: updatedCarData.name,
      description: validCar.description,
      brand: validCar.brand,
      year: updatedCarData.year,
      km: validCar.km,
      color: validCar.color
    };

    expect(receivedValue).toEqual(expectedValue);
  });

  test("Should throw an error when updating a car with a non-existent id", async () => {
    const nonExistingId = "abc";
    const updatedCarData = updatedCar;

    await expect(
      services.update(nonExistingId, updatedCarData)
    ).rejects.toThrow("Error while trying to update.");
  });

});

import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.service";
import { validCar } from "../mocks/services.mock";

describe("Unit Test: Delete Car", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should successfully delete a car by id", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const receivedValue = await services.delete(createdCar.id);

    expect(receivedValue).toEqual("Car was deleted successfully.");
  });

  test("Should throw an error if trying to delete a car with a non-existing id", async () => {
    const nonExistingId = "abc";

    await expect(services.delete(nonExistingId)).rejects.toThrow("Could not find a car with the specified id.");
  });
});

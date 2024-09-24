import { prisma } from "../../database/prisma";
import { Car } from "../../interfaces/car.interface";
import { CarServices } from "../../services/car.service";
import {
  validCar,
} from "../mocks/services.mock";

describe("Unit Tests: Get One Car", () => {
    let services: CarServices;
  
    beforeAll(() => {
      services = new CarServices();
    });
  
    beforeEach(async () => {
      await prisma.$transaction([prisma.car.deleteMany()]);
    });
  
    test("Should be able to successfully get a car by id", async () => {
      const createdCar = await prisma.car.create({ data: validCar });
      const receivedValue = await services.getOne(createdCar.id);
  
      const expectedValue = {
        id: createdCar.id,
        name: validCar.name,
        description: validCar.description,
        brand: validCar.brand,
        year: validCar.year,
        km: validCar.km,
        color: validCar.color
      };
  
      expect(receivedValue).toEqual(expectedValue);
    });
  
    test("Should throw an error if a car with a non-existing id is requested", async () => {
      const nonExistingId = "abc";
  
      await expect(
        services.getOne(nonExistingId)
      ).rejects.toThrow("Could not find a car with the specified id.");
    });
  
  });
  
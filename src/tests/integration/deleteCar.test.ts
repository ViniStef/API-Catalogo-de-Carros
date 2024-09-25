import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prisma";
import { validCar } from "../mocks/services.mock";

describe("DELETE /users/:id", () => {
    const request = supertest(app);
    const endpoint = "/cars";
  

    beforeEach(async () => {
        await prisma.car.deleteMany();
      });
    

    test("Should successfully delete a car", async () => {
        const createdCar = await prisma.car.create({ data: validCar });
        const idParameter = `${endpoint}/${createdCar.id}`; 
        const response = await request.delete(idParameter);

        expect(response.status).toBe(204);
    })

    test("Should not be able to delete a car with non-existing id", async () => {
        const nonExistingId = "abc";
    
        const response = await request.delete(`${endpoint}/${nonExistingId}`);
    
        expect(response.status).toBe(404);
      });
})
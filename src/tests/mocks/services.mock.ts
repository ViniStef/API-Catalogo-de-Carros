export const validCar = {
  name: "Valid Car 1",
  description: "This car has a valid description! Car 1",
  brand: "Ford",
  year: 2019,
  km: 535,
  color: "yellow"
};

export const invalidCarKey = {
  invalidKeyName: "Car 2",
  description: "Car 2 description here!",
  brand: "Honda",
  invalidKeyYear: 2023,
  km: 300,
  invalidKeyColor: "green"
};

export const validMultipleCars = [
  {
    name: "Valid Car 1",
    description: "This car has a valid description! Car 1",
    brand: "BMW",
    year: 2021,
    km: 200,
    color: "teal"
  },
  {
    name: "Valid Car 2",
    description: "This car has a valid description! Car 2",
    brand: "Hyundai",
    year: 2023,
    km: 477,
    color: "blue"
  },
];

export const updatedCar = {
  name: "Brand New Released Car",
  year: 2024,
};

export const invalidUpdatedCar = {
  name: 123,
  year: "2024",
};

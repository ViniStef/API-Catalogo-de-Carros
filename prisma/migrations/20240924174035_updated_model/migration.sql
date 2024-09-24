/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "color" TEXT,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

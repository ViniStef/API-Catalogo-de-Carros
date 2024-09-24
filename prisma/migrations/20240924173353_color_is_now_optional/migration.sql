/*
  Warnings:

  - You are about to drop the column `Color` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "Color",
ADD COLUMN     "color" TEXT;

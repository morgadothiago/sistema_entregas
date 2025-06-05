/*
  Warnings:

  - You are about to drop the column `createdAt` on the `vehicle_types` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerKm` on the `vehicle_types` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `vehicle_types` table. All the data in the column will be lost.
  - You are about to drop the `adresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ajudante_adicional` to the `vehicle_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parada_adicional` to the `vehicle_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tarifa_base` to the `vehicle_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_km_adicional` to the `vehicle_types` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_idAddress_fkey";

-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "complement" TEXT;

-- AlterTable
ALTER TABLE "vehicle_types" DROP COLUMN "createdAt",
DROP COLUMN "pricePerKm",
DROP COLUMN "updatedAt",
ADD COLUMN     "ajudante_adicional" DECIMAL(5,2) NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parada_adicional" DECIMAL(5,2) NOT NULL,
ADD COLUMN     "tarifa_base" DECIMAL(5,2) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "valor_km_adicional" DECIMAL(5,2) NOT NULL;

-- DropTable
DROP TABLE "adresses";

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_idAddress_fkey" FOREIGN KEY ("idAddress") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

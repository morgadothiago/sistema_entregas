/*
  Warnings:

  - The required column `key` was added to the `billings` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "billings" ADD COLUMN     "key" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the `Requirement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Requirement" DROP CONSTRAINT "Requirement_functionalRequirementId_fkey";

-- AlterTable
ALTER TABLE "FunctionalRequirement" ADD COLUMN     "requirements" TEXT[];

-- DropTable
DROP TABLE "Requirement";

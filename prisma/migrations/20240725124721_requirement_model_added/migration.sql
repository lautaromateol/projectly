/*
  Warnings:

  - You are about to drop the column `requirements` on the `FunctionalRequirement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FunctionalRequirement" DROP COLUMN "requirements";

-- CreateTable
CREATE TABLE "Requirement" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "functionalRequirementId" TEXT NOT NULL,

    CONSTRAINT "Requirement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Requirement" ADD CONSTRAINT "Requirement_functionalRequirementId_fkey" FOREIGN KEY ("functionalRequirementId") REFERENCES "FunctionalRequirement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

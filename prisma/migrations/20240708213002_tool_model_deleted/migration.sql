/*
  Warnings:

  - You are about to drop the `Tool` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_techStackId_fkey";

-- AlterTable
ALTER TABLE "TechStack" ADD COLUMN     "tools" TEXT[];

-- DropTable
DROP TABLE "Tool";

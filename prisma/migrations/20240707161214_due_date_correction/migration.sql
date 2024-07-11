/*
  Warnings:

  - You are about to drop the column `dueData` on the `Project` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "dueData",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;

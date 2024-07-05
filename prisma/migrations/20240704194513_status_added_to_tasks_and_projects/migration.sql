/*
  Warnings:

  - Added the required column `dueData` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('InProgress', 'Complete');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('ToDo', 'Doing', 'Done');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "dueData" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'InProgress';

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'ToDo';

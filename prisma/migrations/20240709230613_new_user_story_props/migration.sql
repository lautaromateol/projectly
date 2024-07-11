/*
  Warnings:

  - Added the required column `status` to the `UserStory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StoryStatus" AS ENUM ('Pending', 'InProgress', 'Complete');

-- AlterTable
ALTER TABLE "UserStory" ADD COLUMN     "status" "StoryStatus" NOT NULL;

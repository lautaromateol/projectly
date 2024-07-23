/*
  Warnings:

  - The values [ToDo,Doing,Done] on the enum `TaskStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `due` on the `Task` table. All the data in the column will be lost.
  - Added the required column `due` to the `UserStory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TaskStatus_new" AS ENUM ('Complete', 'Incomplete');
ALTER TABLE "Task" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "TaskStatus_new" USING ("status"::text::"TaskStatus_new");
ALTER TYPE "TaskStatus" RENAME TO "TaskStatus_old";
ALTER TYPE "TaskStatus_new" RENAME TO "TaskStatus";
DROP TYPE "TaskStatus_old";
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'Incomplete';
COMMIT;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "due",
ALTER COLUMN "status" SET DEFAULT 'Incomplete';

-- AlterTable
ALTER TABLE "UserStory" ADD COLUMN     "due" TIMESTAMP(3) NOT NULL;

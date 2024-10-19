/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `projects` table. All the data in the column will be lost.
  - Added the required column `workspace_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_workspaceId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "workspaceId",
ADD COLUMN     "workspace_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

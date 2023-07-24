/*
  Warnings:

  - A unique constraint covering the columns `[workspaceId,title]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId,title]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workspaceId,title]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workspaceId,username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Channel_slug_key` ON `Channel`;

-- DropIndex
DROP INDEX `Channel_title_key` ON `Channel`;

-- DropIndex
DROP INDEX `Project_slug_key` ON `Project`;

-- DropIndex
DROP INDEX `Project_title_key` ON `Project`;

-- DropIndex
DROP INDEX `User_username_key` ON `User`;

-- CreateIndex
CREATE UNIQUE INDEX `Project_workspaceId_title_key` ON `Project`(`workspaceId`, `title`);

-- CreateIndex
CREATE UNIQUE INDEX `Task_projectId_title_key` ON `Task`(`projectId`, `title`);

-- CreateIndex
CREATE UNIQUE INDEX `Team_workspaceId_title_key` ON `Team`(`workspaceId`, `title`);

-- CreateIndex
CREATE UNIQUE INDEX `User_workspaceId_username_key` ON `User`(`workspaceId`, `username`);

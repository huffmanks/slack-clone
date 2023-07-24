/*
  Warnings:

  - A unique constraint covering the columns `[workspaceId,title]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Channel_workspaceId_title_key` ON `Channel`(`workspaceId`, `title`);

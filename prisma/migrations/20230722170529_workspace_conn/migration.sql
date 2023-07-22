/*
  Warnings:

  - Added the required column `workspaceId` to the `Channel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Channel` ADD COLUMN `workspaceId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Project` ADD COLUMN `workspaceId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Channel` ADD CONSTRAINT `Channel_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

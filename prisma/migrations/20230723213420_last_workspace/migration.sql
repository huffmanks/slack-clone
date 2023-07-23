/*
  Warnings:

  - You are about to drop the `_UserToWorkspace` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_UserToWorkspace` DROP FOREIGN KEY `_UserToWorkspace_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserToWorkspace` DROP FOREIGN KEY `_UserToWorkspace_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `workspaceId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_UserToWorkspace`;

-- CreateTable
CREATE TABLE `_workspaces_joined` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_workspaces_joined_AB_unique`(`A`, `B`),
    INDEX `_workspaces_joined_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_workspaces_joined` ADD CONSTRAINT `_workspaces_joined_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_workspaces_joined` ADD CONSTRAINT `_workspaces_joined_B_fkey` FOREIGN KEY (`B`) REFERENCES `Workspace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

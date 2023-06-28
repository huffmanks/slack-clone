/*
  Warnings:

  - You are about to drop the column `assignedToId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `_projectClients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_assignedToId_fkey`;

-- DropForeignKey
ALTER TABLE `_projectClients` DROP FOREIGN KEY `_projectClients_A_fkey`;

-- DropForeignKey
ALTER TABLE `_projectClients` DROP FOREIGN KEY `_projectClients_B_fkey`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `assignedToId`;

-- DropTable
DROP TABLE `_projectClients`;

-- CreateTable
CREATE TABLE `_project_clients` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_project_clients_AB_unique`(`A`, `B`),
    INDEX `_project_clients_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_task_assignedTo` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_task_assignedTo_AB_unique`(`A`, `B`),
    INDEX `_task_assignedTo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_project_clients` ADD CONSTRAINT `_project_clients_A_fkey` FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_project_clients` ADD CONSTRAINT `_project_clients_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_task_assignedTo` ADD CONSTRAINT `_task_assignedTo_A_fkey` FOREIGN KEY (`A`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_task_assignedTo` ADD CONSTRAINT `_task_assignedTo_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

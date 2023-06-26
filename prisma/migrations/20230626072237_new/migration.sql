/*
  Warnings:

  - You are about to drop the column `progess` on the `Project` table. All the data in the column will be lost.
  - You are about to alter the column `rice` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `progess`,
    ADD COLUMN `progress` DOUBLE NULL,
    MODIFY `rice` DOUBLE NULL;

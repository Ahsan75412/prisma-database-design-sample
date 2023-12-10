/*
  Warnings:

  - You are about to drop the `demo1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `demo2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `demo3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `demo1`;

-- DropTable
DROP TABLE `demo2`;

-- DropTable
DROP TABLE `demo3`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `mobile` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `otp` VARCHAR(50) NOT NULL DEFAULT '0',
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

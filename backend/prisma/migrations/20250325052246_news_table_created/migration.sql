/*
  Warnings:

  - You are about to drop the `annoucments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "annoucments";

-- CreateTable
CREATE TABLE "announcments" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "announcments_pkey" PRIMARY KEY ("id")
);

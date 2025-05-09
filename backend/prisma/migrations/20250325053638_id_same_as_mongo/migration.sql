/*
  Warnings:

  - The primary key for the `announcments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `announcments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "announcments" DROP CONSTRAINT "announcments_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "announcments_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "announcments_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "announcments_id_key" ON "announcments"("id");

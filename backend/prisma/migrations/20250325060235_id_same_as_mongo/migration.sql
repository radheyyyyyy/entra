/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `announcments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "announcments_title_key" ON "announcments"("title");

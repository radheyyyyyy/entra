/*
  Warnings:

  - A unique constraint covering the columns `[link,source,title]` on the table `announcments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "announcments_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "announcments_link_source_title_key" ON "announcments"("link", "source", "title");

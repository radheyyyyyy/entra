-- CreateTable
CREATE TABLE "annoucments" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "annoucments_pkey" PRIMARY KEY ("id")
);

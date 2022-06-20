-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'test',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

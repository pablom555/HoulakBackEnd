-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

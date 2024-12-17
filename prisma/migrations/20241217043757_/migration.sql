-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "homePrice" TEXT NOT NULL,
    "crimeRate" TEXT NOT NULL,
    "educationScore" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

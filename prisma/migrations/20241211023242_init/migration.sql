-- CreateTable
CREATE TABLE "ESGMetric" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT NOT NULL,
    "carbonEmissions" REAL NOT NULL,
    "energyUsage" REAL NOT NULL,
    "wasteProduced" REAL NOT NULL
);

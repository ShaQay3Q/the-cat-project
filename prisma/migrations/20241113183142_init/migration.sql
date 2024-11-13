-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "requireAction" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "beginningDate" DATETIME,
    "endingDate" DATETIME,
    "catId" INTEGER NOT NULL,
    CONSTRAINT "Schedule_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("beginningDate", "catId", "endingDate", "frequency", "id", "requireAction") SELECT "beginningDate", "catId", "endingDate", "frequency", "id", "requireAction" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

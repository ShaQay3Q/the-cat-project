-- CreateTable
CREATE TABLE "Household" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "healthStatus" BOOLEAN NOT NULL DEFAULT true,
    "householdId" INTEGER NOT NULL,
    CONSTRAINT "Cat_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Action" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateTime" DATETIME NOT NULL,
    "catId" INTEGER NOT NULL,
    "actionType" TEXT NOT NULL,
    CONSTRAINT "Action_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "requireAction" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "beginningDate" DATETIME NOT NULL,
    "endingDate" DATETIME NOT NULL,
    "catId" INTEGER NOT NULL,
    CONSTRAINT "Schedule_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Household_email_key" ON "Household"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Action_dateTime_key" ON "Action"("dateTime");

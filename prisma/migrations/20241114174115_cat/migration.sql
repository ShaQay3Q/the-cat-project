-- CreateEnum
CREATE TYPE "FrequencyUnit" AS ENUM ('Day', 'Week', 'Month', 'Year');

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('Food', 'Medicin', 'VetVisit');

-- CreateTable
CREATE TABLE "Household" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Household_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "healthStatus" BOOLEAN NOT NULL DEFAULT true,
    "householdId" INTEGER NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "catId" INTEGER NOT NULL,
    "actionType" "ActionType" NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "requireAction" "ActionType" NOT NULL,
    "frequency" INTEGER NOT NULL,
    "frequencyUnit" "FrequencyUnit" NOT NULL,
    "beginningDate" TIMESTAMP(3),
    "endingDate" TIMESTAMP(3),
    "catId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Household_email_key" ON "Household"("email");

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

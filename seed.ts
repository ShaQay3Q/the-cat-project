import { prisma } from "./src/lib/db";
import { generateIdFromEntropySize } from "lucia";

// async function main() {
console.log("Cleaning Database...");

// Delete data in the correct order to avoid foreign key constraint errors
await prisma.household.deleteMany();
await prisma.action.deleteMany();
await prisma.schedule.deleteMany();
await prisma.cat.deleteMany();

console.log("Cleaning Database finished");

console.log("DB seeding start...");

// Households
// Create a household
const household = await prisma.household.create({
	data: {
		email: "household1@example.com",
		cats: {
			create: [
				{
					name: "Pashmak",
					birthday: new Date("2020-01-15"),
					healthStatus: false,
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: "food",
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: "food",
							},
							{
								dateTime: new Date("2024-11-11T21:00:00Z"),
								actionType: "food",
							},
							{
								dateTime: new Date("2024-11-11T12:00:00Z"),
								actionType: "medicine",
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: "medicin",
								frequency: 2, // times a day
								beginningDate: new Date("2024-10-01"),
								endingDate: new Date("2024-12-01"),
							},
							{
								requireAction: "food",
								frequency: 3, // times a day
								beginningDate: null,
								endingDate: null,
							},
						],
					},
				},
				{
					name: "Makhmal",
					birthday: new Date("2023-05-20"),
					healthStatus: true,
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: "food",
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: "food",
							},
							{
								dateTime: new Date("2024-11-11T21:00:00Z"),
								actionType: "food",
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: "Vaccination",
								frequency: 3, // times a day
								beginningDate: null,
								endingDate: null,
							},
						],
					},
				},
			],
		},
	},
});

console.log("Seeding was successful");
// }

// getting an error message for await main
// Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.ts(1378)

await prisma.$disconnect();
process.exit(0);

import { ActionType, FrequencyUnit } from "@prisma/client";
import { prisma } from "./src/lib/db";
// import { generateIdFromEntropySize } from "lucia";

// async function main() {
console.log("Cleaning Database...");

// Delete data in the correct order to avoid foreign key constraint errors
await prisma.action.deleteMany();
await prisma.schedule.deleteMany();
await prisma.cat.deleteMany();
await prisma.household.deleteMany();

console.log("Cleaning Database finished");

console.log("DB seeding start...");

// Households
// Create a household
const Sheghy = await prisma.household.create({
	data: {
		email: "sheghy@mail.com",
		cats: {
			create: [
				{
					name: "Pashmak",
					birthday: new Date("2020-01-15"),
					healthStatus: false,
					image: "/siso.jpeg",
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T21:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T12:00:00Z"),
								actionType: ActionType.Medicin,
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: ActionType.Medicin,
								frequency: 2, // times a day
								frequencyUnit: FrequencyUnit.Day,
								beginningDate: new Date("2024-10-01"),
								endingDate: new Date("2024-12-01"),
							},
							{
								requireAction: ActionType.Food,
								frequency: 3, // times a day
								frequencyUnit: FrequencyUnit.Day,
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
					image: "/hansi.jpeg",
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T21:00:00Z"),
								actionType: ActionType.Food,
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: ActionType.Food,
								frequency: 3, // times a day
								frequencyUnit: FrequencyUnit.Day,
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

const Lean = await prisma.household.create({
	data: {
		email: "lean@email.com",
		cats: {
			create: [
				{
					name: "Momo",
					birthday: new Date("2010-04-10"),
					healthStatus: false,
					image: "/koon.jpeg",
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: ActionType.Food,
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: ActionType.Medicin,
								frequency: 1, // time in a week
								frequencyUnit: FrequencyUnit.Week,
								beginningDate: new Date("2025-01-01"),
								endingDate: new Date("2025-01-30"),
							},
							{
								requireAction: ActionType.Food,
								frequency: 2, // times a day
								frequencyUnit: FrequencyUnit.Day,
								beginningDate: null,
								endingDate: null,
							},
						],
					},
				},
				{
					name: "Dino",
					birthday: new Date("2019-08-02"),
					healthStatus: true,
					image: "/vivi.jpeg",
					actions: {
						create: [
							{
								dateTime: new Date("2024-11-11T10:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T17:00:00Z"),
								actionType: ActionType.Food,
							},
							{
								dateTime: new Date("2024-11-11T21:00:00Z"),
								actionType: ActionType.Food,
							},
						],
					},
					schedules: {
						create: [
							{
								requireAction: ActionType.Food,
								frequency: 3, // times a day
								frequencyUnit: FrequencyUnit.Day,
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

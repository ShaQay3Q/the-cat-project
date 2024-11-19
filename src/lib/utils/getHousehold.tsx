// import { prisma } from "../db";

// export async function getHouseholdByEmail(householdEmail: string) {
// 	const household = await prisma.household.findUnique({
// 		where: { email: householdEmail },
// 		select: {
// 			id: true,
// 			email: true,
// 			// cats: true,
// 			cats: {
// 				select: {
// 					id: true,
// 					name: true,
// 					image: true,
// 					birthday: true,
// 					healthStatus: true,
// 					actions: true, // Include actions
// 					schedules: true, // Include schedules if needed
// 				},
// 			},
// 		},
// 	});

// 	return household;
// }

// export type Household = Awaited<ReturnType<typeof getHouseholdByEmail>>;

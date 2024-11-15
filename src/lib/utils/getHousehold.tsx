import { prisma } from "../db";

export async function getHouseholdByEmail(householdEmail: string) {
	const household = await prisma.household.findUnique({
		where: { email: householdEmail },
		select: {
			id: true,
			email: true,
			cats: true,
		},
	});
	return household;
}

export type Household = Awaited<ReturnType<typeof getHouseholdByEmail>>;

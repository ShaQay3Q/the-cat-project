import { prisma } from "../db";

export async function getHouseholdById(householdId: number) {
	const household = await prisma.household.findUnique({
		where: { id: householdId },
		select: {
			id: true,
			email: true,
			cats: true,
		},
	});
	return household;
}

export type Household = Awaited<ReturnType<typeof getHouseholdById>>;

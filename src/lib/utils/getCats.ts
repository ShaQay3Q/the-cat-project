import { prisma } from "../db";

export async function getCats(householdId?: number) {
	if (!householdId) return [];
	const cats = await prisma.cat.findMany({
		where: { householdId: householdId },
		select: {
			id: true,
			name: true,
			birthday: true,
			healthStatus: true,
			householdId: true,
			actions: true,
			schedules: true,
		},
	});
	return cats;
}

export type HouseholdCats = Awaited<ReturnType<typeof getCats>>[number];

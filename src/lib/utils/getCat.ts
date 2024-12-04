import { prisma } from "../db";

export async function getCatById(catId: number) {
	const cat = await prisma.cat.findUnique({
		where: { id: catId },
		select: {
			id: true,
			name: true,
			image: true,
			birthday: true,
			householdId: true,
			healthStatus: true,
			actions: true,
			schedules: true,
		},
	});
	return cat;
}

export type Cat = Awaited<ReturnType<typeof getCatById>>;

import { prisma } from "../db";

export async function getScheduleByCatId(catId: number) {
	const schedule = await prisma.schedule.findMany({
		where: { catId: catId },
		select: {
			id: true,
			requireAction: true,
			frequency: true,
			frequencyUnit: true,
			beginningDate: true,
			endingDate: true,
			catId: true,
			cat: true,
		},
	});
	return schedule; // This will return an array of actions
}

export type Action = Awaited<ReturnType<typeof getScheduleByCatId>>;

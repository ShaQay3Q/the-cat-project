import { prisma } from "../db";
import { ActionType } from "@prisma/client";

export async function getActionsByCatIdAndActionTypeName(
	actionType: ActionType,
	catId: number
) {
	const actions = await prisma.action.findMany({
		where: { actionType: actionType, catId: catId },
		select: {
			id: true,
			dateTime: true,
			catId: true,
			actionType: true,
			cat: true,
		},
	});
	return actions; // This will return an array of actions
}

export type Action = Awaited<
	ReturnType<typeof getActionsByCatIdAndActionTypeName>
>;

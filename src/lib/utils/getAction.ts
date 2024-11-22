import { prisma } from "../db";
import { ActionType } from "@prisma/client";

export async function getActionsByName(actionType: ActionType) {
	const actions = await prisma.action.findMany({
		where: { actionType: actionType },
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

export type Action = Awaited<ReturnType<typeof getActionsByName>>;

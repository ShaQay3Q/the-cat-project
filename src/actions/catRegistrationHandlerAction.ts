"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function handleAction(formData: FormData) {
	const name = formData.get("name") as string;
	const birthday = formData.get("birthday") as string;

	await prisma.cat.create({
		data: {
			name: name,
			birthday: new Date(birthday),
			householdId: 1, // hardcoded for now, will fix this when auth is added
		},
	});

	revalidatePath("/");
}

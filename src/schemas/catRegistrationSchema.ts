import { z } from "zod";
const fileSizeLimit = 5 * 1024 * 1024; // 5MB

export const catRegistrationSchema = z.object({
	catName: z
		.string({ message: "Name is required" })
		.min(3, "Name should be at least 3 letters"),
	birthday: z.coerce
		.date({ message: "Birthday is required" })
		.default(() => new Date()),
	img: z
		.instanceof(File)
		.refine(
			(file) =>
				[
					"image/png",
					"image/jpeg",
					"image/jpg",
					"image/svg+xml",
					"image/gif",
				].includes(file.type),
			{ message: "Invalid image file type" }
		)
		.refine((file) => file.size <= fileSizeLimit, {
			message: "File size should not exceed 5MB",
		})
		.optional(),
});

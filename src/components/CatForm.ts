import { z } from "zod";

enum FrequencyUnit {
	Day = "Day",
	Week = "Week",
	Month = "Month",
	Year = "Year",
}

enum ActionType {
	Food = "Food",
	Medicin = "Medicin",
	VetVisit = "VetVisit",
}

const ScheduleSchema = z.object({
	id: z.string().or(z.number()),
	requireAction: z.nativeEnum(ActionType),
	frequency: z.number(),
	frequencyUnit: z.nativeEnum(FrequencyUnit),
	beginningDate: z.date().min(new Date()).optional(),
	endingDate: z.date().min(new Date()).optional(),
	description: z.string().optional(),
});

const ActionSchema = z.object({
	id: z.union([z.string(), z.number()]),
	actionType: z.nativeEnum(ActionType).default(ActionType.Food),
	actionTime: z.date(),
});

const CatSchema = z
	.object({
		id: z.union([z.string(), z.number()]),
		houseHoldId: z.bigint(),
		name: z.string(),
		image: z.string().optional(),
		birthday: z.date(),
		isHealthy: z.boolean().default(true),
	})
	.merge(ActionSchema)
	.merge(ScheduleSchema);

type Cat = z.infer<typeof CatSchema>;
type Schedule = z.infer<typeof ScheduleSchema>;
type Action = z.infer<typeof ActionSchema>;

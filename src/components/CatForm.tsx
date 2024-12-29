// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
// 	useFormField,
// 	Form,
// 	FormItem,
// 	FormLabel,
// 	FormControl,
// 	FormDescription,
// 	FormMessage,
// 	FormField,
// } from "./ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"

// import { Button } from "./ui/button";
// import { Cat } from "@/lib/utils/getCat";

// type CatProps = {
// 	cat: Cat;
// };

// enum FrequencyUnit {
// 	Day = "Day",
// 	Week = "Week",
// 	Month = "Month",
// 	Year = "Year",
// }

// enum ActionType {
// 	Food = "Food",
// 	Medicin = "Medicin",
// 	VetVisit = "VetVisit",
// }

// const ScheduleSchema = z.object({
// 	// id: z.string().or(z.number()),
// 	requireAction: z.nativeEnum(ActionType),
// 	frequency: z.number(),
// 	frequencyUnit: z.nativeEnum(FrequencyUnit),
// 	beginningDate: z.date().min(new Date()).optional(),
// 	endingDate: z.date().min(new Date()).optional(),
// 	description: z.string().optional(),
// });

// // const ActionSchema = z.object({
// // 	id: z.union([z.string(), z.number()]),
// // 	actionType: z.nativeEnum(ActionType).default(ActionType.Food),
// // 	actionTime: z.date(),
// // });

// const CatSchema = z
// 	.object({
// 		// id: z.union([z.string(), z.number()]),
// 		// houseHoldId: z.bigint(),
// 		name: z.string(),
// 		image: z.string().optional(),
// 		birthday: z.date(),
// 		isHealthy: z.boolean().default(true),
// 	})
// 	// .merge(ActionSchema)
// 	.merge(ScheduleSchema);

// type Cat = z.infer<typeof CatSchema>;
// type Schedule = z.infer<typeof ScheduleSchema>;
// // type Action = z.infer<typeof ActionSchema>;

// export function RegisterACat() {
// 	const form = useForm<z.infer<typeof CatSchema>>({
// 		resolver: zodResolver(CatSchema),
// 		defaultValues: {
// 			requireAction: ActionType.Food,
// 			frequencyUnit: FrequencyUnit.Day,
// 			description: "",
// 			image: "",
// 		},
// 	});

// 	const onSubmit = () => {};

// 	// const onSubmit = async (data: Cat) => {
// 	// 	try {

// 	// 	}
// 	// }
// 	return (
// 		<Form {...form}>
// 			<form
// 				onSubmit={form.handleSubmit(onSubmit)}
// 				className='flex flex-col gap-4 m-10'
// 			>
// 				{/* name */}
// 				<FormField
// 					control={form.control}
// 					name='name'
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>Name</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder='Enter cat name'
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormDescription>Display name.</FormDescription>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 			</form>
// 		</Form>
// 	);
// }

"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function CatForm() {
	const [image, setImage] = useState<File | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Image:", image);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type='email'
				placeholder='Email'
				required
			/>
			<Input
				type='password'
				placeholder='Password'
				required
			/>
			<Input
				type='file'
				onChange={handleImageChange}
			/>
			<Button type='submit'>Submit</Button>
		</form>
	);
}

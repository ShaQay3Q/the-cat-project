"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import * as ReactHookForm from "react-hook-form";
// const { useForm } = ReactHookForm;

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// const FormSchema = z.object({
// 	email: z.string().email({ message: "invalid email" }),
// 	password: z.string(),
// });

// type FormFileds = {
// 	email: string;
// 	password: string;
// };

// Updated schema
const FormSchema = z.object({
	email: z.string().email({
		message: "Ener a valid email",
	}),
	password: z.string().min(8, {
		message: "minimum 6 character",
	}),
});

export default function Home() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	// const onSubmit: SubmitHandler<FormFileds> = (data) => {
	// 	console.log(data);
	// };

	// Submit handler
	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<div className='m-5'>
			<h1>Main Page</h1>
			<Form {...form}>
				<form
					className='test flex flex-col gap-4'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					{/* Email Field */}
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>e-mail</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter your email'
										className='rounded-md border border-gray-300 p-2'
										{...field}
									/>
								</FormControl>
								{/* <FormMessage /> */}
							</FormItem>
						)}
					/>

					{/* Email Field */}
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter your password'
										className='rounded-md border border-gray-300 p-2'
										{...field}
									/>
								</FormControl>
								{/* <FormMessage /> */}
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</div>
	);
}

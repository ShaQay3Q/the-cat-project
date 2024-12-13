"use client";

// import { optional, z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// // import * as ReactHookForm from "react-hook-form";
// // const { useForm } = ReactHookForm;

// import { SubmitHandler, useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
// 	useFormField,
// 	Form,
// 	FormItem,
// 	FormLabel,
// 	FormControl,
// 	FormDescription,
// 	FormMessage,
// 	FormField,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// // const FormSchema = z.object({
// // 	email: z.string().email({ message: "invalid email" }),
// // 	password: z.string(),
// // });

// type FormFileds = {
// 	email: string;
// 	password: string;
// 	image?: File;
// };

// const ImageSchema = z.object({
// 	image: z
// 		//Rest of validations done via react dropzone
// 		.instanceof(File)
// 		.refine((file) => file.size !== 0, "Please upload an image"),
// });

// // Updated schema
// const FormSchema = z
// 	.object({
// 		email: z.string().email({
// 			message: "Ener a valid email",
// 		}),
// 		password: z.string().min(8, {
// 			message: "minimum 6 character",
// 		}),
// 	})
// 	.merge(ImageSchema);

// export default function Home() {
// 	const [image, setImage] = useState<File | null>(null);

// 	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		if (e.target.files && e.target.files[0]) {
// 		  setImage(e.target.files[0]);
// 		}
// 	  };

// 	const form = useForm<z.infer<typeof FormSchema>>({
// 		resolver: zodResolver(FormSchema),
// 		defaultValues: {
// 			mode: "onBlur",
// 			// email: "",
// 			// password: "",
// 			image: new File([""], "filename"),
// 		},
// 	});
// 	// const onSubmit: SubmitHandler<FormFileds> = (data) => {
// 	// 	console.log(data);
// 	// };

// 	// Submit handler
// 	function onSubmit(data: z.infer<typeof FormSchema>) {
// 		console.log(data);
// 	}

// 	return (
// 		<div className='m-5'>
// 			<h1>Main Page</h1>
// 			<Form {...form}>
// 				<form
// 					className='test flex flex-col gap-4'
// 					onSubmit={form.handleSubmit(onSubmit)}
// 				>
// 					{/* Email Field */}
// 					<FormField
// 						control={form.control}
// 						name='email'
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>e-mail</FormLabel>
// 								<FormControl>
// 									<Input
// 										placeholder='Enter your email'
// 										className='rounded-md border border-gray-300 p-2'
// 										{...field}
// 									/>
// 								</FormControl>
// 								{/* <FormMessage /> */}
// 							</FormItem>
// 						)}
// 					/>

// 					{/* Password Field */}
// 					<FormField
// 						control={form.control}
// 						name='password'
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Password</FormLabel>
// 								<FormControl>
// 									<Input
// 										placeholder='Enter your password'
// 										className='rounded-md border border-gray-300 p-2'
// 										{...field}
// 									/>
// 								</FormControl>
// 								{/* <FormMessage /> */}
// 							</FormItem>
// 						)}
// 					/>
// 					{/* Image Upload Field */}
// 					<FormField
// 						control={form.control}
// 						name='image'
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Upload Image</FormLabel>
// 								<FormControl>
// 									<div className='grid w-full lg:max-w-sm items-center gap-1.5'>
// 										{/* <Label htmlFor='picture'>Picture</Label> */}
// 										<Input
// 											placeholder='Upleaod an image'
// 											type='file'
// 											className='file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
// 											// className='rounded-md border border-gray-300 p-2'

// 											{...field}
// 										/>
// 									</div>
// 									{/* <Input
// 										placeholder='Enter your password'
// 										className='rounded-md border border-gray-300 p-2'
// 										{...field}
// 									/> */}
// 								</FormControl>
// 								{/* <FormMessage /> */}
// 							</FormItem>
// 						)}
// 					/>
// 					<Button type='submit'>Submit</Button>
// 				</form>
// 			</Form>
// 		</div>
// 	);
// }

import React from "react";
import CatRegistrationForm from "@/components/CatRegistrationForm";

export default function Home() {
	return (
		<div className='px-4 bg-orange-200'>
			<CatRegistrationForm />
		</div>
	);
}

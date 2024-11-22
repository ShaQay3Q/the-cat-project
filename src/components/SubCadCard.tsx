import React from "react";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "./ui/card";
import { Content } from "@radix-ui/react-dropdown-menu";

export default function SubCadCard() {
	return (
		<div className='bg-rose-200 rounded pl-1 px-3'>
			<h1 className='font-semibold text-rose-700'>SubCadCard</h1>
			<Card className='w-auto flex flex-col justify-center items-center'>
				<h2 className='pt-1  font-normal text-sm'>Last Feeding Time:</h2>
				<h3 className='font-medium text-base text-rose-700'>
					<span>Today, 12:36</span>
				</h3>
				<h2 className='pt-1  font-normal text-sm'>Servings:</h2>
				<h3 className='font-medium text-base text-rose-700'>
					<span>0 out of 3</span>
				</h3>
			</Card>
		</div>
	);
}

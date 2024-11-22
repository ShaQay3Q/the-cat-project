import React from "react";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "./ui/card";
import { Cat } from "@prisma/client";

type Props = {
	cat: Cat;
};

export default function SubCadCard({ cat }: Props) {
	return (
		<div className='bg-rose-200 rounded pt-1 px-2 pb-3 flex flex-col items-center'>
			<h1
				className='font-semibold text-rose-700'
				defaultValue={"Food"}
			>
				Food
			</h1>
			<Card className='px-1 w-auto flex flex-col justify-center items-center'>
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

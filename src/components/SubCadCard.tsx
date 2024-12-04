import React from "react";
// import {
// 	Card,
// 	CardHeader,
// 	CardFooter,
// 	CardTitle,
// 	CardDescription,
// 	CardContent,
// } from "./ui/card";
import { ActionType, Cat } from "@prisma/client";
import { getActionsByCatIdAndActionTypeName } from "@/lib/utils/getAction";

type Props = {
	oneCat: Cat;
	actiontype: ActionType;
};

export default async function SubCadCard({ oneCat, actiontype }: Props) {
	const cId = oneCat.id;

	const action = await getActionsByCatIdAndActionTypeName(actiontype, cId);
	console.log(action);

	return <div>CAT</div>;

	// return (
	// 	<div className='bg-rose-200 rounded pt-1 px-2 pb-3 flex flex-col items-center'>
	// 		<h1
	// 			className='font-semibold text-rose-700'
	// 			defaultValue={"Food"}
	// 		>
	// 			Food
	// 		</h1>
	// 		<Card className='px-1 w-auto flex flex-col justify-center items-center'>
	// 			<h2 className='pt-1  font-normal text-sm'>Last Feeding Time:</h2>
	// 			<h3 className='font-medium text-base text-rose-700'>
	// 				<span>Today, 12:36</span>
	// 			</h3>
	// 			<h2 className='pt-1  font-normal text-sm'>Servings:</h2>
	// 			<h3 className='font-medium text-base text-rose-700'>
	// 				<span>0 out of 3</span>
	// 			</h3>
	// 		</Card>
	// 	</div>
	// );
}

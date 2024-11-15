"use client";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DropdownAction from "./DropDownAction";
import { Cat } from "@/lib/utils/getCat";

// Define props type
type Props = {
	oneCat: Cat;
};

export default function CatCard({ oneCat }: Props) {
	const catName = oneCat?.name;
	const lastFed = oneCat?.actions.findLast(
		(action) => action.actionType === "Food"
	)?.dateTime as Date;
	console.log(`lastFed: ${lastFed}`);

	const formattedLastFedDate = lastFed?.toLocaleDateString("en-US", {
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
	});
	const alt = `${catName}'s image`;

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{catName}</CardTitle>
				<CardDescription>
					<p>
						Last feeding time:
						<br />
						<span className='font-bold'>
							{lastFed ? formattedLastFedDate : " Loading..."}
						</span>
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<Image
					className='rounded-md overflow-hidden'
					// src={oneCat.image!
					src={oneCat?.image ? oneCat?.image : ""}
					alt={alt}
					width={350} // Specify the image's width
					height={350} // Specify the image's height
					style={{
						objectFit: "cover",
					}}
				/>
				<CardDescription>Choose an action on {catName}:</CardDescription>
				<DropdownAction />
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Given</Button>
			</CardFooter>
		</Card>
	);
}

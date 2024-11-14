"use client";
// import { useState, useEffect } from "react";
// import { DateTime } from "luxon"; // Import DateTime from Luxon// import { ChevronDown } from "lucide-react";
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
// import { compareDateTimes, getCurrentDateTime } from "@/utils/utilDateTime";
// import { fetchExternalImage } from "next/dist/server/image-optimizer";

// Define props type // TODO get the cats from db
type OneCat = {
	oneCat: Cat;
};

export default function CatCard({ oneCat }: OneCat) {
	// const [catName] = useState(oneCat?.name);
	const catName = oneCat?.name;
	// const [lastFed, setLastFed] = useState<DateTime | null>(null); // State for last fed time
	// const date = "2024-10-09T14:30:00Z"; // Hardcoded DateTime string // TODO get it from db
	const lastFed = oneCat?.actions.findLast(
		(action) => action.actionType === "Food"
	)?.dateTime;
	console.log(`lastFed: ${lastFed}`);

	const formattedLastFedDate = lastFed?.toLocaleDateString("en-US", {
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
	});
	// const now = DateTime.now().toISO(); // Get the NOW DateTime and store it as string
	const alt = `${catName}'s image`;

	// useEffect(() => {
	// 	const fetchLastTime = () => {
	// 		const lastFeedingDateTime = DateTime.fromISO(date); // Convert an ISO string back to a DateTime object
	// 		setLastFed(lastFeedingDateTime); // Set the lastFed state
	// 		const start = DateTime.fromISO(date);
	// 		const now = DateTime.now(); // Get the NOW DateTime and store it as string
	// 		const diff = Math.floor(now.diff(start, "minutes").minutes);
	// 		console.log(`diff: ${diff}`);
	// 	};
	// 	fetchLastTime();
	// 	// const dateTime = DateTime.fromISO(date); // Convert an ISO string back to a DateTime object
	// }, []);

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
							{/* {lastFed?.daysInYear} */}
							{/* {lastFed?.} */}
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

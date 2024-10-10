"use client";
import { useState, useEffect } from "react";
import { DateTime } from "luxon"; // Import DateTime from Luxon// import { ChevronDown } from "lucide-react";
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
// import { compareDateTimes, getCurrentDateTime } from "@/utils/utilDateTime";
// import { fetchExternalImage } from "next/dist/server/image-optimizer";

export default function CatCard() {
	const [catName] = useState("Vita");
	const [lastFed, setLastFed] = useState<DateTime | null>(null); // State for last fed time
	// const [timeSinceLastFed, setTimeSinceLastFed] = useState<string>("");
	const date = "2024-10-09T14:30:00Z"; // Hardcoded DateTime string // TODO get it from db
	// const now = DateTime.now().toISO(); // Get the NOW DateTime and store it as string

	const alt = `${catName}'s image`;
	// console.log(`logging dateTime: ${dateTime.toString()}`);

	useEffect(() => {
		const fetchLastTime = () => {
			const lasFeedingDateTime = DateTime.fromISO(date); // Convert an ISO string back to a DateTime object
			setLastFed(lasFeedingDateTime); // Set the lastFed state
			const start = DateTime.fromISO(date);
			const now = DateTime.now(); // Get the NOW DateTime and store it as string
			const diff = now.diff(start, "minutes");
			console.log(`diff: ${diff}`);
		};
		fetchLastTime();
		// const dateTime = DateTime.fromISO(date); // Convert an ISO string back to a DateTime object
	}, []);

	useEffect(() => {
		if (lastFed) {
			console.log(`Updated lastFed state: ${lastFed}`);
		}
	}, []);

	// useEffect(() => {
	//     // Function to fetch DateTime from the datebase
	//     const fetchLastFedTime = async () => {
	//         try {
	//             // Replace this with your API endpoint
	//             const response = await fetch('/api/cat/last-fed');
	//             if (!response.ok) {
	//                 throw new Error('Network response was not ok');
	//             }
	//             const date = await response.json();

	//             // Assuming your API returns a DateTime string in ISO format
	//             const fetchedDateTime = DateTime.fromISO(date.lastFed);
	//             setLastFed(fetchedDateTime);
	//         } catch (error) {
	//             console.error('Error fetching last fed time:', error);
	//         }
	//     };

	//     fetchLastFedTime();
	// }, []); // Empty dependency array to run only once on mount

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{catName}</CardTitle>
				<CardDescription>
					<p>
						Last feeding time:
						<br />
						<span className='font-bold'>
							{lastFed ? lastFed.toFormat(" cccc, HH:mm") : " Loading..."}
							{/* {lastFed?.daysInYear} */}
							{/* {lastFed?.} */}
						</span>
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<Image
					className='rounded-md overflow-hidden'
					src='/Vivi.jpeg'
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

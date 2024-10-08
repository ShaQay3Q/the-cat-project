"use client";
import { useState } from "react";
// import { ChevronDown } from "lucide-react";
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
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";

// const catName = "Vita";

export default function CatCard() {
	// const [selectedOption, setSelectedOption] = useState("");
	const [catName] = useState("Vita");
	const alt = `${catName}'s image`;

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{catName}</CardTitle>
				{/* <CardDescription>
					This is a custom card with various elements.
				</CardDescription> */}
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='aspect-video overflow-hidden rounded-md'>
					<Image
						src='/Vita.jpeg'
						alt={alt}
						width={350} // Specify the image's width
						height={200} // Specify the image's height
						style={{
							objectFit: "cover",
						}}
					/>

					{/* <img
						alt={alt}
						className='object-cover w-full h-full'
						height='200'
						src='/Vita.jpg'
						style={{
							aspectRatio: "350/200",
							objectFit: "cover",
						}}
						width='350'
					/> */}
				</div>
				{/* <Select
					onValueChange={setSelectedOption}
					value={selectedOption}
				>
					<SelectTrigger>
						<SelectValue placeholder='Select an option' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='option1'>Option 1</SelectItem>
						<SelectItem value='option2'>Option 2</SelectItem>
						<SelectItem value='option3'>Option 3</SelectItem>
					</SelectContent>
				</Select> */}
				<CardDescription>Choose an action on {catName}:</CardDescription>
				<DropdownAction />
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Given</Button>
			</CardFooter>
		</Card>
	);
}

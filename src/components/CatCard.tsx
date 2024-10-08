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

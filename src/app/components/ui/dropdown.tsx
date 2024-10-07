"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuRadioGroupDemo() {
	const [action, setAction] = useState("food");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>
					{action.charAt(0).toUpperCase() + action.slice(1)}
					<ChevronDown className='ml-2 h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Select action</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={action}
					onValueChange={setAction}
				>
					<DropdownMenuRadioItem value='food'>Food</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='medicine'>
						Medicine
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

import { ListOfCats } from "@/components/ListOfCats";
import { Button } from "@/components/ui/button";
import { getCatById } from "@/lib/utils/getCat";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";
import Link from "next/link";
import React from "react";

export default async function Gojiraaaa() {
	const aHousehold = await getHouseholdByEmail("sheghy@mail.com");

	if (aHousehold) {
		return <p>{aHousehold}</p>;
	}

	// const cats = aHousehold?.cats;
	// console.log(cats);

	// // await pauses the execution of the function until the Promise.all call resolves,
	// // assigning the resolved array to detailedCats.
	// const catArr =
	// 	await // Promise.all takes an array of Promise objects (produced by getCatById(cat.id) for each cat)
	// 	// and returns a single Promise that resolves when all the promises in the array are resolved.
	// 	// The resolved value is an array containing the results of each getCatById call.
	// 	Promise.all(
	// 		aHousehold?.cats
	// 			// For each cat, it calls getCatById(cat.id), which returns a Promise that
	// 			// resolves with the detailed data for that cat.
	// 			.map((cat) => getCatById(cat.id)) ??
	// 			// The nullish coalescing operator (??) provides a fallback value of
	// 			// an empty array ([]) if household?.cats is undefined or null.
	// 			// This ensures the code doesn’t throw an error when trying to map over
	// 			// an undefined or null value.
	// 			[]
	// 	);

	// return (
	// 	<div className='flex flex-col justify-center items-center gap-7 pt-6 bg-slate-900 h-screen'>
	// 		<div className='flex flex-row gap-8'>
	// 			<h1 className='font-extrabold text-3xl text-sky-100'>Gojiraaaa</h1>
	// 			<Link
	// 				legacyBehavior
	// 				href='http://localhost:3000/qr-code'
	// 				passHref
	// 			>
	// 				<Button
	// 					variant={"secondary"}
	// 					asChild
	// 				>
	// 					<a>Generate QR-Code</a>
	// 				</Button>
	// 			</Link>
	// 		</div>

	// 		<div className='flex flex-row p-1 bg-slate-600 gap-1'>
	// 			<ListOfCats cats={catArr} />
	// 		</div>
	// 	</div>
	// );
}

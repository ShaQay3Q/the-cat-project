import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { ListOfCats } from "@/components/ListOfCats";
import { getCatById } from "@/lib/utils/getCat";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";

export default async function Home() {
	const aHousehold = await getHouseholdByEmail("sheghy@mail.com");
	if (!aHousehold) {
		return;
	}

	const cats = aHousehold?.cats;
	console.log(cats);

	// await pauses the execution of the function until the Promise.all call resolves,
	// assigning the resolved array to detailedCats.
	const catArr =
		await // Promise.all takes an array of Promise objects (produced by getCatById(cat.id) for each cat)
		// and returns a single Promise that resolves when all the promises in the array are resolved.
		// The resolved value is an array containing the results of each getCatById call.
		Promise.all(
			aHousehold?.cats
				// For each cat, it calls getCatById(cat.id), which returns a Promise that
				// resolves with the detailed data for that cat.
				.map((cat) => getCatById(cat.id)) ??
				// The nullish coalescing operator (??) provides a fallback value of
				// an empty array ([]) if household?.cats is undefined or null.
				// This ensures the code doesn’t throw an error when trying to map over
				// an undefined or null value.
				[]
		);

	return (
		<div>
			<CatCard oneCat={catArr[1]} />
			<ListOfCats cats={catArr} />
			<QRCodeGenerator household={aHousehold} />
		</div>
	);
}

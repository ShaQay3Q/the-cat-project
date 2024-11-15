import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { ListOfCats } from "@/components/ListOfCats";
import { Cat, getCatById } from "@/lib/utils/getCat";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";
// import { Cat } from "@prisma/client";

// const aCat = await getCatById(5);

export default async function Home() {
	const aHousehold = await getHouseholdByEmail("sheghy@mail.com");
	if (!aHousehold) {
		return;
	}

	const cats = aHousehold?.cats;
	console.log(cats);

	const catArr = await Promise.all(
		aHousehold?.cats.map((cat) => getCatById(cat.id)) ?? []
	);

	// console.log(`detailedCats: ${detailedCats}`);

	console.log(catArr); // Each cat now includes actions and schedules
	return (
		<div>
			{/* <p>{shaCats}</p> */}
			<CatCard oneCat={catArr[1]} />
			<ListOfCats cats={catArr} />
			<QRCodeGenerator household={aHousehold} />
		</div>
	);
}

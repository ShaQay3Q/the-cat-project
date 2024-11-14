import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { RenderCatCards } from "@/components/ShowCats";
import { getCatById } from "@/lib/utils/getCat";
import { getHouseholdById } from "@/lib/utils/getHousehold";
// import { Cat } from "@prisma/client";

const aHousehold = await getHouseholdById(1);
const aCat = await getCatById(4);
export default function Home() {
	return (
		<div>
			<CatCard oneCat={aCat} />
			<QRCodeGenerator household={aHousehold} />
			{/* <RenderCatCards oneCat={aCat} /> */}
		</div>
	);
}

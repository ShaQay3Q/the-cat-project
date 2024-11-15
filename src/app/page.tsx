import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { HouseholdCats, RenderCatCards } from "@/components/HouseholdCats";
import { getCatById } from "@/lib/utils/getCat";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";
// import { Cat } from "@prisma/client";

const aHousehold = await getHouseholdByEmail("sheghy@mail.com");
const aCat = await getCatById(4);
export default function Home() {
	return (
		<div>
			<CatCard oneCat={aCat} />
			<HouseholdCats oneHousehold={aHousehold} />
			<QRCodeGenerator household={aHousehold} />
		</div>
	);
}

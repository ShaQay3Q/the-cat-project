import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { ListOfCats } from "@/components/ListOfCats";
import { Cat, getCatById } from "@/lib/utils/getCat";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";
// import { Cat } from "@prisma/client";

const aHousehold = await getHouseholdByEmail("sheghy@mail.com");
const aCat = await getCatById(5);
export default function Home() {
	const shaCats = aHousehold?.cats as Cat[];

	return (
		<div>
			<CatCard oneCat={aCat} />
			<ListOfCats cats={shaCats} />
			<QRCodeGenerator household={aHousehold} />
		</div>
	);
}

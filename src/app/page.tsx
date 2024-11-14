import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { getCatById } from "@/lib/utils/getCat";
// import { Cat } from "@prisma/client";

const userId = "userId0456";
const aCat = await getCatById(12);
export default function Home() {
	return (
		<div>
			<CatCard oneCat={aCat} />
			<QRCodeGenerator userId={userId} />
		</div>
	);
}

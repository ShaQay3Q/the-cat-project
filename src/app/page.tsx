import CatCard from "@/components/CatCard";
import QRCodeGenerator from "@/components/QRCodeGenerator";

const userId = "userId0456"
export default function Home() {
	return (
		<div>
			<CatCard />
			<QRCodeGenerator userId={userId} />
		</div>
	);
}

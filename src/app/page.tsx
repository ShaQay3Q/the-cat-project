import SubCadCard from "@/components/SubCadCard";
import { getCatById } from "@/lib/utils/getCat";
import { getHouseholdById } from "@/lib/utils/getHousehold";
// import { ActionType } from "@prisma/client";

export default async function Home() {
	const cat = await getHouseholdById(1);
	if (!cat) {
		return;
	}
	if (cat) {
		return (
			<div className='flex flex-col p-6 gap-4 justify-start items-center align-top bg-slate-900 h-screen w-screen box-border'>
				<h1 className='text-neutral-50 font-extrabold leading-4 font'>
					Main Page
				</h1>
				<SubCadCard
					oneCat={cat}
					actiontype={"Food"}
				/>
			</div>
		);
	}
}

import SubCadCard from "@/components/SubCadCard";

export default async function Home() {
	return (
		<div className='flex flex-col p-6 gap-4 justify-start items-center align-top bg-slate-900 h-screen w-screen box-border'>
			<h1 className='text-neutral-50 font-extrabold leading-4 font'>
				Main Page
			</h1>
			<SubCadCard />
		</div>
	);
}

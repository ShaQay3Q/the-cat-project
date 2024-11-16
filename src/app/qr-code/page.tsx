import React from "react";
import QRCodeGenerator from "@/components/QRCodeGenerator";
// import Link from "next/link";
import { getHouseholdByEmail } from "@/lib/utils/getHousehold";

export default async function QRPage() {
	const household = await getHouseholdByEmail("sheghy@mail.com");

	return (
		<div className='flex flex-col items-center justify-between min-h-screen bg-white p-4'>
			<div className='w-full max-w-sm bg-white rounded-lg p-6 flex flex-col justify-between flex-grow'>
				<div className='flex flex-col items-center flex-grow justify-center'>
					<h1 className='text-3xl font-bold text-center mb-2'>
						Generated QR-Code
					</h1>
					<div className='m-14'>
						<QRCodeGenerator household={household} />
					</div>
				</div>
			</div>
		</div>
	);
}

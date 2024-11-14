"use client";

import { Household } from "@/lib/utils/getHousehold";
import QRCode from "react-qr-code";

type Props = {
	household: Household;
};

export default function QRCodeGenerator({ household }: Props) {
	const connectURL = `http://localhost:3000/catsPageForUserWithId=${household?.id}`;

	return (
		<div className='h-full w-full flex flex-col gap-5 items-center justify-center my-6'>
			{
				<div>
					<QRCode
						size={400}
						value={connectURL}
					/>
				</div>
			}
		</div>
	);
}

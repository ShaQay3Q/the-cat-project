"use client";

import QRCode from "react-qr-code";

type Props = {
	householdId: number;
};

export default function QRCodeGenerator({ householdId }: Props) {
	if (!householdId) {
		return;
	}
	// const connectURL = `http://localhost:3000/catsPageForUserWithId=${household?.id}`;
	const connectURL = `http://localhost:3000/profile/${householdId}`;

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

"use client";

import QRCode from "react-qr-code";

type Props = {
	userId: string;
};

export default function QRCodeGenerator({ userId }: Props) {
	const connectURL = `http://localhost:3000/catsPageForUserWithId=${userId}`;

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

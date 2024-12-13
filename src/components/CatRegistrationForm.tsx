"use client";

// import { handleAction } from "@/app/_actions/formHandler";
import React from "react";

export default function CatRegistrationForm() {
	const currentDateRaw = new Date();
	const formatDateISO = (date: Date) => {
		// Convert the date to ISO string
		const isoString = date.toISOString();
		// Split at the "T" character to get the date part
		const formattedDate = isoString.split("T")[0];
		return formattedDate;
	};

	const currentDate = formatDateISO(currentDateRaw);
	return (
		<div className='w-full flex flex-col max-w-xl mx-auto justify-center min-h-screen items-center'>
			<h1 className='text-pink-600 font-bold text-xl mb-4'>Cat Registration</h1>

			<form
				className='w-full'
				// action={handleAction}
			>
				<div className='flex flex-col gap-y-4'>
					<div>
						<label
							className='block'
							htmlFor='name'
						>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							min={3}
							required
							className='w-full p-2 rounded-md text-gray-900'
						/>
					</div>
					<div>
						<label
							className='block'
							// same name as id
							htmlFor='birthday'
						>
							Date of Birth
						</label>
						<input
							type='date'
							// name => for the submision
							name='birthday'
							id='birthday'
							min='2000-01-01'
							value={currentDate}
							required
							className='w-full p-2 rounded-md text-gray-900'
						/>
					</div>
					<div>
						<label
							className='block'
							htmlFor='img'
						>
							Upload an Image
							<span className='ml-1 text-sm'>(Optional)</span>
						</label>
						<input
							type='file'
							name='img'
							id='img'
							accept='image/png, image/jpeg, image/jpg, image/svg+xml , image/gif'
							className='w-full p-2 rounded-md text-gray-900 flex h-9 border border-input bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
						/>
					</div>
					<button className='bg-pink-600 w-full rounded-md p-2 mt-5 text-lg font-bold tracking-wider uppercase text-white'>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}

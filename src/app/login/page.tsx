"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // import { cookies } from "next/headers";

export default function Login() {
	return (
		<div className='h-screen flex flex-col items-center bg-white'>
			<div>
				<Image
					className='flex-1 object-cover object-left max-w-[300px] max-h-[300px]'
					src='/cat.jpg' // Ensure to start with `/` for Next.js
					alt='Drawing of a cat'
					layout='responsive' // or `intrinsic`, `fixed`, or `fill` depending on your needs
					width={300}
					height={300}
				/>
			</div>
			<div className='flex flex-1 px-5 flex-col items-center justify-evenly w-full'>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold mb-2'>Hi there!</h1>
					<h2 className='text-sm text-muted-foreground mb-2'>
						The Cat Prject <br /> Track your cat&#39;s food and medication.
					</h2>
				</div>
				<div className='flex flex-col gap-5 items-center w-full'>
					<div className='flex flex-col w-full gap-3'>
						<Input placeholder='your@mail.com' />
						<Input placeholder='password' />

						<Button>Sign in with email</Button>
						<Button className='bg-red-500'>
							Don&#39;t have an account yet!
						</Button>
					</div>
					<div className='w-full flex gap-3 items-center'>
						<div className='h-px bg-muted-foreground/20 flex-1'></div>
						<p className='text-muted-foreground text-xs'>or continue with</p>
						<div className='h-px bg-muted-foreground/20 flex-1'></div>
					</div>
					<Button
						variant='outline'
						className='w-full gap-2'
						asChild
					>
						<Link href='/api/oauth/google'>
							<FcGoogle className='size-5' />
							Sign in with Google
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

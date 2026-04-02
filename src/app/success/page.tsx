export default function SuccessPage() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-2xl font-bold text-pink-600'>Cat registered!</h1>
			<p className='text-gray-500 mt-2'>Your cat was successfully added.</p>
			<a
				href='/'
				className='mt-5 text-pink-600 underline'
			>
				Register another cat
			</a>
		</div>
	);
}

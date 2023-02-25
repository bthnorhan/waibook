import Image from 'next/image';

import { Button, StackedImage } from '..';

export const Banner = () => {
	return (
		<section
			id='banner'
			className='flex flex-col xl:flex-row justify-between py-10 xl:py-20 gap-20'
		>
			<div className='flex-1 flex flex-col gap-16 px-28 justify-center items-center xl:items-start text-center xl:text-start order-2 xl:order-1'>
				<h1 className='font-bold text-6xl text-primary-dark'>
					Welcome to our magical world!
				</h1>
				<p className='text-3xl'>
					Here, you&apos;ll find a universe of stories and characters to ignite your
					child&apos;s imagination and foster their love of reading.
				</p>
				<Button text='Get Started' className='!w-52 !h-14 text-lg font-bold' />
			</div>
			<div className='flex-1 flex flex-col justify-center items-center order-1 xl:order-2'>
				<StackedImage />
			</div>
		</section>
	);
};

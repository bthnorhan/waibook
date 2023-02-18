import Image from 'next/image';

import { Button, StackedImage } from '..';

export const Banner = () => {
	return (
		<section id='#banner' className='flex flex-row justify-between px-40 my-20 gap-20'>
			<div className='flex-1 flex flex-col gap-16 px-28 justify-center'>
				<h1 className='font-bold text-6xl'>
					Expand knowledge<br></br> by reading books
				</h1>
				<p className='font-light text-3xl'>
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia, there live the blind texts.
				</p>
				<Button text='Get Started' className='!w-52 !h-14' />
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<StackedImage />
			</div>
		</section>
	);
};

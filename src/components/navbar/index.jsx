import Image from 'next/image';

import { scrollToTop } from '@/utils';

export const NavBar = ({ children }) => {
	return (
		<nav className='flex flex-col items-center gap-2 sm:flex-row py-16 justify-between'>
			<div
				className='flex flex-row items-center gap-x-4 cursor-pointer select-none'
				onClick={scrollToTop}
			>
				<Image
					src='/assets/svgs/logo.svg'
					alt='Waibook Logo'
					width={48}
					height={48}
					priority
				/>
				<h1 className='text-2xl font-bold'>WaiBook</h1>
			</div>

			<div className='flex flex-row items-center '>{children}</div>
		</nav>
	);
};

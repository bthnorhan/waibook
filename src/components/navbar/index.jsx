import Image from 'next/image';

import { NavBarItem } from '..';

export const NavBar = () => {
	return (
		<nav className='flex flex-row py-16 px-40 justify-between'>
			<div className='flex flex-row items-center gap-x-4'>
				<Image src='/logo.svg' alt='Waibook Logo' width={48} height={48} priority />
				<h1 className='text-2xl font-bold'>WaiBook</h1>
			</div>
			<div className='flex flex-row items-center '>
				<NavBarItem text='About Us' />
				<NavBarItem text='Catalog' />
				<NavBarItem text='Blog' />
				<NavBarItem text='Contact Us' type='button' />
			</div>
		</nav>
	);
};

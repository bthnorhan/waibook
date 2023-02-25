import Head from 'next/head';
import Image from 'next/image';

import {
	AboutUs,
	Banner,
	Blog,
	Catalog,
	Information,
	NavBar,
	NavBarItem,
	ScrollToTop,
} from '@/components';

const Home = () => {
	return (
		<>
			<Head>
				<title>WaiBook</title>
				<meta name='description' content='WaiBook website template powered by Next.js ' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='sm:px-10 md:px-12 lg:px-40'>
				<NavBar>
					<NavBarItem text='About Us' href='about-us' />
					<NavBarItem text='Catalog' href='catalog' />
					<NavBarItem text='Blog' href='blog' />
					<NavBarItem text='Contact Us' type='button' />
				</NavBar>
				<Banner />
				<AboutUs />
				<Catalog />
				<Blog />
				<Information />
				<NavBar>
					<NavBarItem text='About Us' href='about-us' />
					<NavBarItem text='Catalog' href='catalog' />
					<NavBarItem text='Blog' href='blog' />
				</NavBar>
				<ScrollToTop />
			</main>
		</>
	);
};

export default Home;

import Head from 'next/head';
import Image from 'next/image';

import { Banner, NavBar } from '@/components';

const Home = () => {
	return (
		<>
			<Head>
				<title>WaiBook</title>
				<meta name='description' content='WaiBook website template powered by Next.js ' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<NavBar />
				<Banner />
			</main>
		</>
	);
};

export default Home;

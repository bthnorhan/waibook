import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const Home = () => {
	return (
		<>
			<Head>
				<title>WaiBook</title>
				<meta
					name='description'
					content='WaiBook book website template powered by Next.js '
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main></main>
		</>
	);
};

export default Home;

import Image from 'next/image';

import { VideoPlayer } from '..';

export const AboutUs = () => {
	return (
		<section id='about-us' className='flex flex-col justify-center py-10 xl:py-20 gap-20'>
			<div className='text-center'>
				<h6 className='text-2xl text-primary'>About Us</h6>
				<h3 className='text-4xl font-bold text-primary-dark'>What is WaiBook?</h3>
			</div>
			<div className='flex flex-col xl:flex-row gap-20 xl:gap-40 items-center'>
				<div className='flex-1 flex flex-col gap-10 order-2 xl:order-1'>
					<h1 className='font-bold text-4xl text-primary-dark'>
						Buy & Read Children&apos;s Books
					</h1>
					<p className='text-2xl'>
						Our carefully curated selection of books features colorful illustrations and
						engaging narratives that are sure to captivate young readers. From classic
						tales to contemporary favorites, we&apos;ve got something for every age and
						interest.
						<br></br>
						<br></br>
						Our mission is to inspire a lifelong passion for reading and learning in
						children, and we believe that the journey starts with a great book. So come
						explore our collection, and let your child&apos;s imagination soar!
					</p>
				</div>
				<VideoPlayer
					src='/assets/videos/reading.mp4'
					className='flex-1  order-1 xl:order-2'
				/>
			</div>
		</section>
	);
};

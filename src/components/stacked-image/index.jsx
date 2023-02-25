import Image from 'next/image';

export const StackedImage = () => {
	return (
		<div className='relative flex justify-center items-center'>
			<Image
				className='rounded-2xl z-10 absolute top-[-3rem] right-60 drop-shadow-xl'
				alt='Child reading book'
				src='/assets/images/c1.jpg'
				width={180}
				height={48}
				priority
			/>
			<Image
				className='rounded-2xl z-20 drop-shadow-xl'
				alt='Child reading book'
				src='/assets/images/c2.jpg'
				width={320}
				height={48}
				priority
			/>
			<Image
				className='rounded-2xl z-30 absolute bottom-[-3rem] left-60 drop-shadow-xl'
				alt='Child reading book'
				src='/assets/images/c3.jpg'
				width={180}
				height={48}
				priority
			/>
		</div>
	);
};

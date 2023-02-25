import Image from 'next/image';

export const Rate = ({ rate = 0 }) => {
	return (
		<div className='flex flex-row bottom-0'>
			{Array.from(Array(rate)).map((a, index) => (
				<Image
					alt='Rate Star'
					key={index}
					src='/assets/svgs/star.svg'
					width={32}
					height={32}
					className='w-6 md:w-8'
				/>
			))}
		</div>
	);
};

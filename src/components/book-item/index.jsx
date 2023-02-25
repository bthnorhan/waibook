import Image from 'next/image';

import { Rate } from '..';

export const BookItem = ({ book }) => {
	return (
		<div className='flex justify-center py-2 lg:py-6 hover:shadow-2xl'>
			<div className='flex flex-col gap-3'>
				<Image src={book.image} alt='Book Cover' width={320} height={16} />
				<div>
					<h5 className='font-bold text-2xl'>{book.name}</h5>
					<h6>{book.author}</h6>
				</div>
				<Rate rate={book.rate} />
			</div>
		</div>
	);
};

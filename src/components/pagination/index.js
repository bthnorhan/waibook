import Image from 'next/image';

export const Pagination = ({ currentPage = 0, totalPage = 0, onPageSelect }) => {
	const onPageSelectHandler = event => {
		const page = event.target.getAttribute('data-page');
		onPageSelect && onPageSelect(Number(page));
	};

	const onArrowHandler = incrementCount => () => {
		const page = currentPage + incrementCount;
		onPageSelect &&
			onPageSelect(incrementCount > 0 ? Math.min(totalPage, page) : Math.max(0, page));
	};

	return (
		<div className='flex flex-row gap-6 text-center align-center justify-center'>
			<Image
				alt='Left Arrow'
				src='/assets/svgs/left_arrow.svg'
				width={36}
				height={36}
				onClick={onArrowHandler(-1)}
				className='cursor-pointer'
			/>
			{Array.from(Array(totalPage + 1)).map((_, index) => (
				<div
					className={`pointer-events-auto cursor-pointer h-9 w-9 flex justify-center items-center ${
						currentPage === index
							? 'bg-primary-dark rounded-2xl text-gray-50 font-bold'
							: ''
					}`}
					key={`page-${index + 1}`}
					onClick={onPageSelectHandler}
					data-page={index}
				>
					<span className='text-lg pointer-events-none'>{index + 1}</span>
				</div>
			))}
			<Image
				alt='Right Arrow'
				src='/assets/svgs/right_arrow.svg'
				width={36}
				height={36}
				onClick={onArrowHandler(1)}
				className='cursor-pointer'
			/>
		</div>
	);
};

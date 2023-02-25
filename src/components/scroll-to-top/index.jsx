import { useEffect, useState } from 'react';

import Image from 'next/image';

import { scrollToTop } from '@/utils';

export const ScrollToTop = () => {
	const [isShow, setIsShow] = useState(false);

	const onScrollTopClickHandler = () => {
		isShow && scrollToTop();
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsShow(window.scrollY >= 300);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed left-0 right-0 bottom-4 transition-all ease-in-out duration-700 opacity-100 pointer-events-none ${
				!isShow && '!opacity-0'
			}`}
		>
			<div
				onClick={onScrollTopClickHandler}
				className={`w-16 lg:w-24 mx-auto bg-gray-50 border-2 border-gray-100/60 hover:border-primary-dark/60 rounded-2xl drop-shadow-2xl pointer-events-auto p-4 overflow-visible ${
					isShow && 'cursor-pointer'
				}`}
			>
				<Image
					className='mx-auto'
					src='/assets/svgs/up_arrow.svg'
					alt='Up Arrow'
					width={48}
					height={48}
				/>
			</div>
		</div>
	);
};

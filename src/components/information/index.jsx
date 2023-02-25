import { useEffect, useMemo, useState } from 'react';

import { Button } from '..';
import styles from '@/styles/Information.module.css';
import { scrollToTop } from '@/utils';

export const Information = () => {
	const [width, setWidth] = useState(128);

	useEffect(() => {
		window && setWidth(window?.innerWidth - 320);
	}, []);

	return (
		<section
			id='information'
			className='relative flex justify-center items-center py-10 xl:py-20 text-gray-50'
		>
			<div
				className={`flex justify-center items-center text-center py-10 xl:py-20 ${styles.information} rounded-2xl`}
			>
				<div className='w-2/4 flex flex-col gap-20 items-center'>
					<h3 className='text-5xl font-bold'>Get More Information</h3>
					<p className='text-2xl'>
						Whether you&apos;re a parent, teacher, or simply a book lover, our website
						has something for everyone. From classic tales to contemporary favorites, we
						offer a carefully curated selection of children&apos;s books that are sure
						to delight and entertain. And with helpful resources like book
						recommendations, reviews, and lists, you&apos;ll always be in the know about
						the latest and greatest reads for kids of all ages.
					</p>
					<Button
						text='Contact Us'
						outline
						className='!w-52 !h-14'
						onClick={scrollToTop}
					/>
				</div>
			</div>
		</section>
	);
};

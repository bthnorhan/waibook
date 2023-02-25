import { useMemo, useState } from 'react';

import { BookItem, Pagination } from '..';
import { BOOKS } from '@/constants';
import { getBooks, getBooksCategories, getCategoryBookCount, scrollToElement } from '@/utils';

export const TabContainer = () => {
	const [tabs, setTabs] = useState(getBooksCategories());
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedTab, setSelectedTab] = useState(tabs[0].key);

	const books = useMemo(() => getBooks(selectedTab, currentPage), [selectedTab, currentPage]);
	const totalPage = useMemo(() => getCategoryBookCount(selectedTab), [selectedTab]);

	const onTabClick = event => {
		setCurrentPage(0);
		const key = event.target.getAttribute('data-key');
		setSelectedTab(key);
	};

	const onPageSelect = page => {
		setCurrentPage(page);
		scrollToElement('tabs');
	};

	const renderTabs = () => {
		return (
			<section id='tabs' className='flex flex-row'>
				{tabs.map(t => (
					<div
						key={t.key}
						data-key={t.key}
						className={`flex-1 text-center border-b-2 p-1 md:p-4 cursor-pointer ${
							selectedTab === t.key
								? 'mx-4 font-bold text-primary border-b-primary-dark'
								: ''
						}`}
						onClick={onTabClick}
					>
						<h1 className='pointer-events-none'>{t.title}</h1>
					</div>
				))}
			</section>
		);
	};

	const renderBooks = () => {
		return (
			<>
				{books.map((b, index) => (
					<BookItem book={b} key={b.slug + index} />
				))}
			</>
		);
	};

	return (
		<section id='catalog'>
			{renderTabs()}
			<section
				id='tab-container'
				className='grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 my-10'
			>
				{renderBooks()}
			</section>
			<Pagination
				currentPage={currentPage}
				totalPage={totalPage}
				onPageSelect={onPageSelect}
			/>
		</section>
	);
};

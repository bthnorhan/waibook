import { BOOKS, BOOK_COUNT_PER_PAGE } from '@/constants';

export const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToElement = (id = '') => {
	const el = document.getElementById(id);
	el && el.scrollIntoView({ behavior: 'smooth' });
};

export const getBooksCategories = () => {
	return BOOKS.map(b => ({ key: b.key, title: b.title })) ?? [];
};

export const getCategoryBookCount = categoryKey => {
	return (
		Math.floor(BOOKS.find(b => b.key === categoryKey)?.books?.length / BOOK_COUNT_PER_PAGE) ?? 0
	);
};

export const getBooks = (categoryKey, page = 0) => {
	const firstBookIndex = page * BOOK_COUNT_PER_PAGE;
	return (
		BOOKS.find(b => b.key === categoryKey).books.slice(
			firstBookIndex,
			firstBookIndex + BOOK_COUNT_PER_PAGE,
		) ?? []
	);
};

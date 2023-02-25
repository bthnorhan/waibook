import Link from 'next/link';

import { Button } from '..';
import { scrollToElement } from '@/utils';

export const NavBarItem = ({ text, href = '', type = 'a' }) => {
	const onClickHandler = () => {
		scrollToElement(href);
	};

	return (
		<div
			className={`${
				type === 'button' ? 'w-32 md:w-40' : 'w-20 md:w-28'
			} h-12 flex items-center justify-center cursor-pointer`}
			onClick={onClickHandler}
		>
			{type === 'button' ? <Button href={href} text={text} /> : <span>{text}</span>}
		</div>
	);
};

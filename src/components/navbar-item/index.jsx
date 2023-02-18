import Link from 'next/link';
import { Button } from '..';

export const NavBarItem = ({ text, href = '/', type = 'a' }) => {
	return (
		<Link href={href}>
			<div
				className={`${
					type === 'button' ? 'w-40' : 'w-28'
				} h-12 flex items-center justify-center cursor-pointer`}
			>
				{type === 'button' ? <Button href={href} text={text} /> : <span>{text}</span>}
			</div>
		</Link>
	);
};

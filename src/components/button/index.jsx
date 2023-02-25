import { useRouter } from 'next/router';

export const Button = ({ text, onClick, className = '', href = '', outline = false }) => {
	const router = useRouter();

	const onClickHandler = () => {
		if (onClick) {
			onClick();
		} else {
			router.push(href);
		}
	};

	return (
		<div
			className={`w-full h-full bg-primary hover:bg-primary-dark rounded-2xl text-gray-50 flex items-center justify-center cursor-pointer ${
				outline ? 'border-2' : ''
			} ${className}`}
			onClick={onClickHandler}
		>
			<span>{text}</span>
		</div>
	);
};

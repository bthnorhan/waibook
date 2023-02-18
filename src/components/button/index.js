import { useRouter } from 'next/router';

export const Button = ({ text, onClick, className = '', href = '/' }) => {
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
			className={`w-full h-full bg-primary hover:bg-primary-dark rounded-lg text-gray-50 flex items-center justify-center cursor-pointer ${className}`}
			onClick={onClickHandler}
		>
			<span>{text}</span>
		</div>
	);
};

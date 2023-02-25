import Image from 'next/image';

export const BlogItem = ({ blog }) => {
	return (
		<div className='flex justify-center p-4 rounded-2xl hover:shadow-2xl cursor-pointer'>
			<div className='flex flex-col gap-3'>
				<Image
					src={blog.image}
					alt='Blog Image'
					width={480}
					height={16}
					className='rounded-2xl mx-auto'
				/>
				<div className='max-w-[480px]'>
					<h5 className='font-bold text-2xl'>{blog.title}</h5>
					<h6 className='font-light'>{blog.author}</h6>
					<h6 className='font-light'>{blog.date}</h6>
				</div>
			</div>
		</div>
	);
};

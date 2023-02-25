import { BlogItem } from '..';
import { BLOGS } from '@/constants';

export const Blog = () => {
	return (
		<section id='blog' className='flex flex-col justify-center py-10 xl:py-20 gap-20'>
			<div className='text-center'>
				<h6 className='text-2xl text-primary'>Blog</h6>
				<h3 className='text-4xl font-bold text-primary-dark'>Find the New Information</h3>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
				{BLOGS.map(blog => (
					<BlogItem key={blog.slug} blog={blog} />
				))}
			</div>
		</section>
	);
};

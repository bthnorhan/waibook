import { TabContainer } from '..';

export const Catalog = () => {
	return (
		<section id='catalog' className='flex flex-col justify-center py-10 xl:py-20 gap-20'>
			<div className='text-center'>
				<h6 className='text-2xl text-primary'>Catalog</h6>
				<h3 className='text-4xl font-bold text-primary-dark'>List of Book Categories</h3>
			</div>
			<TabContainer />
		</section>
	);
};

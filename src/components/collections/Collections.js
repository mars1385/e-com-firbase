//import
import React from 'react';
import CollectionItem from './CollectionItem';
//redux
import { useSelector } from 'react-redux';
import { shopCollectionsSelector } from '../../redux/selectors/shopSelectors';

const Collections = () => {
	//redux state
	const collections = useSelector(shopCollectionsSelector);
	//jsx
	return (
		<div className='container mt-2'>
			<div className='row'>
				<div className='col-md-9 order-1'>
					<div className='row align'>
						<div className='col-md-12 mb-5'>
							<div className='float-md-left'>
								<h2 className='text-black h5'>Shop All</h2>
							</div>
						</div>
					</div>
					<div className='row mb-5 preview'>
						{collections.map(collection => {
							return collection.items.map(item => <CollectionItem key={item.id} item={item} />);
						})}
					</div>
				</div>
				<div className='col-md-3 order-2'>
					<div className='border mb-4 rounded p-4'>
						<h2 className='mb-4 h6 text-uppercase text-black d-block text-center'>Categories</h2>
						<ul className='list-unstyled b-0  text-center'>
							<li className='mb-1'>Bags</li>
							<li className='mb-1'>Shoes</li>
							<li className='mb-1'>Watches</li>
							<li className='mb-1'>T-shirts</li>
							<li className='mb-1'>Jeans</li>
							<li className='mb-1'>Jacket</li>
							<li className='mb-1'>Womens</li>
							<li className='mb-1'>Mens</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collections;

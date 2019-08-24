//import
import React from 'react';
import CollectionItem from './CollectionItem';
//redux
import { useSelector } from 'react-redux';
import { shopCollectionPreviewSelector } from '../../redux/selectors/shopSelectors';

const Collections = () => {
	//redux state
	const collections = useSelector(shopCollectionPreviewSelector);
	//jsx
	return (
		<div className={`${window.innerWidth < 600 ? 'order-12' : ''} col-md-9`}>
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
	);
};

export default Collections;

//import
import React from 'react';
import CollectionItem from '../../components/collections/CollectionItem';
//redux
import { useSelector } from 'react-redux';
import { shopCollectionSelector } from '../../redux/selectors/shopSelectors';

const Categories = ({ match }) => {
	//redux state
	const collection = useSelector(shopCollectionSelector(match.params.categoryId));
	//jsx
	return (
		<div className={`col-md-9 ${window.innerWidth < 600 ? 'order-12' : ''}`}>
			<div className='row align'>
				<div className='col-md-12 mb-5'>
					<div className='float-md-left'>
						<h2 className='text-black h5'>Shop {collection.title}</h2>
					</div>
				</div>
			</div>
			<div className='row mb-5 preview'>
				{collection.items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Categories;

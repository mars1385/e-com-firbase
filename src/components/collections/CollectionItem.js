//import
import React from 'react';
import PropTypes from 'prop-types';
import './CollectionsItem.scss';
import ButtonGroup from '../form-input/ButtonGroup';
//redux
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cartActions';

const CollectionItem = ({ item }) => {
	const { name, imageUrl, price } = item;
	//redux dispatch
	const dispatch = useDispatch();
	//adding to redux
	const onAddItem = () => {
		dispatch(addItemToCart(item));
	};
	//jsx
	return (
		<div className='col-lg-5 col-md-5 item-entry mb-5 mx-auto  collection-item'>
			<div className='image rounded' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<ButtonGroup onClick={onAddItem}>Add To Cart</ButtonGroup>
		</div>
	);
};

CollectionItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default CollectionItem;

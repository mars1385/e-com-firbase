//import
import React from 'react';
import './BagCartItem.scss';

const BagCartItem = ({ item }) => {
	//props
	const { imageUrl, name, price, quantity } = item;
	//jsx
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} * {price}
				</span>
			</div>
		</div>
	);
};

export default BagCartItem;

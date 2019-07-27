//import
import React from 'react';
import './CartCheckoutItem.scss';
//redux
import { useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart, removeItem } from '../../redux/actions/cartActions';

const CartCheckoutItem = ({ item }) => {
	//redux
	const dispatch = useDispatch();
	//items
	const { name, quantity, price, imageUrl } = item;
	//remove a item
	const onRemoveItem = () => {
		dispatch(removeItemFromCart(item));
	};
	//inc
	const onIncItem = () => {
		dispatch(addItemToCart(item));
	};
	//dec
	const onDecItem = () => {
		dispatch(removeItem(item));
	};
	//jsx
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='price'>${price}</span>
			<span className='quantity'>
				<div className='arrow' onClick={onDecItem}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={onIncItem}>
					&#10095;
				</div>
			</span>
			<span className='total-price'>${quantity * price}</span>
			<div className='remove-button' onClick={onRemoveItem}>
				&#10005;
			</div>
		</div>
	);
};

export default CartCheckoutItem;

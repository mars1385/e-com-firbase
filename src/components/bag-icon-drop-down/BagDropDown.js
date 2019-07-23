//import
import React from 'react';
import ButtonGroup from '../form-input/ButtonGroup';
import './BagDropDown.scss';
//redux
import { useSelector } from 'react-redux';
//component
import BagCartItem from './BagCartItem';

const BagDropDown = () => {
	//redux state
	const cartItems = useSelector(state => state.cart.cartItems);
	//jsx
	return (
		<div className='bag-drop-down'>
			<div className='bag-items'>
				{cartItems.map(item => (
					<BagCartItem key={item.id} item={item} />
				))}
			</div>
			<ButtonGroup>GO TO CHECKOUT</ButtonGroup>
		</div>
	);
};

export default BagDropDown;

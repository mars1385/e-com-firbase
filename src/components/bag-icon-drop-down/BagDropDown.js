//import
import React from 'react';
import ButtonGroup from '../form-input/ButtonGroup';
import './BagDropDown.scss';
import { withRouter } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsSelector } from '../../redux/selectors/cartSelectors';
import { setToggle } from '../../redux/actions/cartActions';
//component
import BagCartItem from './BagCartItem';

const BagDropDown = props => {
	//redux state
	const cartItems = useSelector(cartItemsSelector);
	const dispatch = useDispatch();
	//got to checkout
	const onClick = () => {
		props.history.push('/checkout');
		//hide bag drop down
		dispatch(setToggle());
	};
	//jsx
	return (
		<div className='bag-drop-down'>
			<div className='bag-items'>
				{cartItems.length ? (
					cartItems.map(item => <BagCartItem key={item.id} item={item} />)
				) : (
					<span className='empty-msg'>Your cart is empty</span>
				)}
			</div>
			<ButtonGroup onClick={onClick}>GO TO CHECKOUT</ButtonGroup>
		</div>
	);
};

export default withRouter(BagDropDown);

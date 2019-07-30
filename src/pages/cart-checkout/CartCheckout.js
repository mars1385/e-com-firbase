//import
import React from 'react';
import './CartCheckout.scss';
import CartCheckoutItem from '../../components/cart-checkout-item/CartCheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout/StripeCheckoutButton';
//redux
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsSelector, totalPriceSelector } from '../../redux/selectors/cartSelectors';

const CartCheckout = () => {
	//redux store
	const { cartItems, totalPrice } = useSelector(
		createStructuredSelector({
			cartItems: cartItemsSelector,
			totalPrice: totalPriceSelector
		})
	);
	//jsx
	return (
		<div className='checkout '>
			<div className='container'>
				<div className='checkout-header'>
					<div className='header-block'>
						<span>Image</span>
					</div>
					<div className='header-block'>
						<span>Product</span>
					</div>
					<div className='header-block'>
						<span>Price</span>
					</div>
					<div className='header-block'>
						<span>Quantity</span>
					</div>
					<div className='header-block'>
						<span>Total</span>
					</div>
					<div className='header-block'>
						<span>Remove</span>
					</div>
				</div>
				{cartItems.map(item => (
					<CartCheckoutItem key={item.id} item={item} />
				))}
				<div className='row'>
					<div className='col-md-9' />
					<div className='col-md-3 total'>
						<span>Total : ${totalPrice} </span>
						<StripeCheckoutButton price={totalPrice} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCheckout;

//import
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey = '';
	//submit
	const onSubmit = token => {
		console.log(token);
		alert('Payment Successful');
	};
	//jsx
	return (
		<StripeCheckout
			label='Pay Now'
			name='E-com'
			shippingAddress
			billingAddress
			description={`Your Total Price $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onSubmit}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;

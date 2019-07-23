//add item
export const addItemToCart = (cartItems, item) => {
	//check to see if item exist
	const exists = cartItems.find(cartItem => cartItem.id === item.id);

	//exists?
	if (exists) {
		//yse
		return cartItems.map(cartItem =>
			cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}
	//no
	return [...cartItems, { ...item, quantity: 1 }];
};

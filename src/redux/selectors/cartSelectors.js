//import
import { createSelector } from 'reselect';

//cart state
const cartSelector = state => state.cart;

//select cart Item
export const cartItemsSelector = createSelector(
	[cartSelector],
	cart => cart.cartItems
);

//toggle
export const toggle = createSelector(
	[cartSelector],
	cart => cart.hidden
);

//item count
export const countCartItemsSelector = createSelector(
	[cartItemsSelector],
	cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

//total price
export const totalPriceSelector = createSelector(
	[cartItemsSelector],
	cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
); //end

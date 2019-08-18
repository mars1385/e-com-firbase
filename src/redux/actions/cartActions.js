//import
import { HIDDEN, ADD_CART_ITEM, REMOVE_ITEM_FROM_CART, REMOVE_ITEM, CLEAR_CART } from './types';

//toggle bag icon
export const setToggle = () => {
	return {
		type: HIDDEN
	};
};

//add a item to cart
export const addItemToCart = item => {
	return {
		type: ADD_CART_ITEM,
		payload: item
	};
};

//remove a item from cart
export const removeItemFromCart = item => {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: item
	};
};

//dec a item quality
export const removeItem = item => {
	return {
		type: REMOVE_ITEM,
		payload: item
	};
};

//clear all items in cart
export const clearCart = () => ({
	type: CLEAR_CART
});

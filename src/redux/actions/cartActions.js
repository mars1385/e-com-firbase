//import
import { HIDDEN, ADD_CART_ITEM } from './types';

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

//import
import { HIDDEN, ADD_CART_ITEM, REMOVE_ITEM_FROM_CART, REMOVE_ITEM } from '../actions/types';
import { addItemToCart, removeItem } from '../../utils/cart';

const initialState = {
	hidden: true,
	cartItems: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HIDDEN:
			return { ...state, hidden: !state.hidden };
		case ADD_CART_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case REMOVE_ITEM_FROM_CART:
			return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
		case REMOVE_ITEM:
			return { ...state, cartItems: removeItem(state.cartItems, action.payload) };
		default:
			return state;
	}
}

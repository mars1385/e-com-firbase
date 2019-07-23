//import
import { HIDDEN, ADD_CART_ITEM } from '../actions/types';
import { addItemToCart } from '../../utils/cart';

const initialState = {
	hidden: true,
	cartItems: [],
	cartItemsCount: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HIDDEN:
			return { ...state, hidden: !state.hidden };
		case ADD_CART_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
				cartItemsCount: state.cartItemsCount + 1
			};
		default:
			return state;
	}
}

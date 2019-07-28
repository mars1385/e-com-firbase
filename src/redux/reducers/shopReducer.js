//import
import SHOP_DATA from './shopData';

const initialState = {
	collections: SHOP_DATA
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

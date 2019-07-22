//import
import { HIDDEN } from '../actions/types';

const initialState = {
	hidden: true
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HIDDEN:
			return { ...state, hidden: !state.hidden };
		default:
			return state;
	}
}

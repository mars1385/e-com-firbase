//import TYPES
import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SING_OUT_FAILED,
	SING_OUT_SUCCESS,
	REGISTER_FAILED
} from '../actions/types';

const initialState = {
	currentUser: null,
	error: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, currentUser: action.payload, error: null };
		case SING_OUT_SUCCESS:
			return { ...state, currentUser: null, error: null };
		case LOGIN_FAILED:
		case SING_OUT_FAILED:
		case REGISTER_FAILED:
			return { ...state, currentUser: null, error: action.payload };
		default:
			return state;
	}
}

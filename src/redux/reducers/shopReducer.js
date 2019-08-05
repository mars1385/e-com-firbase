//import
import { GET_COLLECTION_DATA_SUCCESS, LOADING_DATA, GET_COLLECTION_DATA_FAILED } from '../actions/types';

const initialState = {
	collections: null,
	loading: false,
	error: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_DATA:
			return { ...state, loading: true };
		case GET_COLLECTION_DATA_SUCCESS:
			return { ...state, collections: action.payload, loading: false };
		case GET_COLLECTION_DATA_FAILED:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}

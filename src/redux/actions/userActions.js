//import
import { SET_CURRENT_USER } from './types';

//set current user
export const setCurrentUser = user => {
	return {
		type: SET_CURRENT_USER,
		payload: user
	};
};

//import
import { combineReducers } from 'redux';

//reducers
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});

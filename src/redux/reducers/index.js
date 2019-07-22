//import
import { combineReducers } from 'redux';

//reducers
import userReducer from './userReducer';
import bagReducer from './bagReducer';

export default combineReducers({
	user: userReducer,
	toggle: bagReducer
});

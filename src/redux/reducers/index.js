//import
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';
import shopReducer from './shopReducer';

//config persist
const config = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	menu: menuReducer,
	shop: shopReducer
});

export default persistReducer(config, rootReducer);

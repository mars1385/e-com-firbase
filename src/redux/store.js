//import
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

//root reducer
import rootReducer from './reducers';

const initialState = {};

const middleware = [];
//create store
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const persistor = persistStore(store);

export default { store, persistor };

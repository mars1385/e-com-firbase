//import
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

//root reducer
import rootReducer from './reducers';
//saga
import { setCollectionDataStart } from './sagas/shopSagas';

const initialState = {};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
//create store
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

sagaMiddleware.run(setCollectionDataStart);

const persistor = persistStore(store);

export default { store, persistor };

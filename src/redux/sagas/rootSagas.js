//import
import { all, call } from 'redux-saga/effects';

//our sagas
import { setCollectionDataStart } from './shopSagas';
import { userAuth } from './userSagas';
import { cartSaga } from './cartSagas.js';

export default function* rootSaga() {
	yield all([call(setCollectionDataStart), call(userAuth), call(cartSaga)]);
}

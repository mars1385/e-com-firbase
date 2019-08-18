//import
import { takeLatest, all, call, put } from 'redux-saga/effects';
//actions
import { clearCart } from '../actions/cartActions';
//types
import { SING_OUT_SUCCESS } from '../actions/types';

export function* clearAllCart() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(SING_OUT_SUCCESS, clearAllCart);
}

//export all
export function* cartSaga() {
	yield all([call(onSignOutSuccess)]);
}

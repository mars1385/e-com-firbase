//import
import { LOADING_DATA } from '../actions/types';
import { getDataSuccess, getDataFailed } from '../actions/shopActions';

import { takeLatest, call, put } from 'redux-saga/effects';

import { fireStore, newCollectionsItems } from '../../utils/firebase/firebase';

//get data
export function* setCollectionData() {
	try {
		const collectionsRef = fireStore.collection('collections');
		//getting
		const snapShot = yield collectionsRef.get();

		const newCollections = yield call(newCollectionsItems, snapShot);

		yield put(getDataSuccess(newCollections));
	} catch (error) {
		yield put(getDataFailed(error.message));
	}
}
//start
export function* setCollectionDataStart() {
	yield takeLatest(LOADING_DATA, setCollectionData);
}

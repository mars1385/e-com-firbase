//import
import { GET_COLLECTION_DATA_SUCCESS, LOADING_DATA, GET_COLLECTION_DATA_FAILED } from './types';

import { fireStore, newCollectionsItems } from '../../utils/firebase/firebase';

//setting collection shop data
export const setCollectionData = () => async dispatch => {
	try {
		const collectionsRef = fireStore.collection('collections');
		//set loading
		dispatch(setLoadingData());
		//getting
		const snapShot = await collectionsRef.get();

		const newCollections = await newCollectionsItems(snapShot);

		dispatch(getDataSuccess(newCollections));
	} catch (error) {
		dispatch(getDataFailed(error.message));
	}
}; //end

//loading data
const setLoadingData = () => ({
	type: LOADING_DATA
}); //end

//getting data success
const getDataSuccess = collectionData => ({
	type: GET_COLLECTION_DATA_SUCCESS,
	payload: collectionData
}); //end

//failed
const getDataFailed = error => ({
	type: GET_COLLECTION_DATA_FAILED,
	payload: error
}); //end

//import
import { GET_COLLECTION_DATA_SUCCESS, LOADING_DATA, GET_COLLECTION_DATA_FAILED } from './types';

//loading data
export const setLoadingData = () => ({
	type: LOADING_DATA
}); //end

//getting data success
export const getDataSuccess = collectionData => ({
	type: GET_COLLECTION_DATA_SUCCESS,
	payload: collectionData
}); //end

//failed
export const getDataFailed = error => ({
	type: GET_COLLECTION_DATA_FAILED,
	payload: error
}); //end

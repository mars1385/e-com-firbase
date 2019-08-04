//import
import { GET_COLLECTION_DATA } from './types';

//setting collection shop data
export const setCollectionData = collectionData => {
	return {
		type: GET_COLLECTION_DATA,
		payload: collectionData
	};
};

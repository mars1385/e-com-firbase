//import
import { createSelector } from 'reselect';

//state
const shopSelector = state => state.shop;

//select shop collections
export const shopCollectionsSelector = createSelector(
	[shopSelector],
	shop => shop.collections
); //end

export const shopCollectionPreviewSelector = createSelector(
	[shopCollectionsSelector],
	collections => Object.keys(collections).map(key => collections[key])
); //end

//selecting a specific collection
export const shopCollectionSelector = collectionUrl =>
	createSelector(
		[shopCollectionsSelector],
		collections => collections[collectionUrl]
	); //end

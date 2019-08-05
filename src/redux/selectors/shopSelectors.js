//import
import { createSelector } from 'reselect';

//state
const shopSelector = state => state.shop;

//select shop collections
export const shopCollectionsSelector = createSelector(
	[shopSelector],
	shop => shop.collections
); //end

//select data loading
export const dataLoadingSelector = createSelector(
	[shopSelector],
	shop => shop.loading
); //end

//select error message
export const errorMessageSelector = createSelector(
	[shopSelector],
	shop => shop.error
); //end

//select is data loaded
export const isDataLoadedSelector = createSelector(
	[shopSelector],
	shop => !!shop.collections
); //end

export const shopCollectionPreviewSelector = createSelector(
	[shopCollectionsSelector],
	collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
); //end

//selecting a specific collection
export const shopCollectionSelector = collectionUrl =>
	createSelector(
		[shopCollectionsSelector],
		collections => (collections ? collections[collectionUrl] : null)
	); //end

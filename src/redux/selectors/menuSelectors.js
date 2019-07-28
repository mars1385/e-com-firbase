//import
import { createSelector } from 'reselect';

//state
const menuSelector = state => state.menu;

//select collections
export const collectionsSelector = createSelector(
	[menuSelector],
	menu => menu.Collections
); //end

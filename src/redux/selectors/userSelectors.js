//import
import { createSelector } from 'reselect';

//user state
const userSelector = state => state.user;

//getting current user
export const currentUserSelector = createSelector(
	[userSelector],
	user => user.currentUser
);

//import
import {
	GOOGLE_LOGIN_START,
	EMAIL_LOGIN_START,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	CHECK_USER_STATE,
	SING_OUT_FAILED,
	SING_OUT_SUCCESS,
	SING_OUT_START,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from './types';

//is user log in ?
export const checkUserSate = () => ({
	type: CHECK_USER_STATE
});

//---------------------handel singIn-------------------------

//google signIn start
export const googleLoginStart = () => ({
	type: GOOGLE_LOGIN_START
});

//email signIn start
export const emailLoginStart = userAuth => ({
	type: EMAIL_LOGIN_START,
	payload: userAuth
});

//email signIn failed
export const loginFailed = error => ({
	type: LOGIN_FAILED,
	payload: error
});

//email signIn success
export const loginSuccess = user => ({
	type: LOGIN_SUCCESS,
	payload: user
});
//--------------------register handel------------------------
export const registerUserStart = userAuthData => ({
	type: REGISTER_START,
	payload: userAuthData
});

export const registerUserSuccess = ({ user, otherData }) => ({
	type: REGISTER_SUCCESS,
	payload: { user, otherData }
});

export const registerUserFailed = error => ({
	type: REGISTER_FAILED,
	payload: error
});
//--------------------sign out handel------------------------
//sign out user
export const signOutStart = () => ({
	type: SING_OUT_START
});

export const signOutSuccess = () => ({
	type: SING_OUT_SUCCESS
});

export const signOutFailed = error => ({
	type: SING_OUT_FAILED,
	payload: error
});

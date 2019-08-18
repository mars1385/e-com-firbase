// import
import { takeLatest, put, all, call } from 'redux-saga/effects';
//types
import {
	GOOGLE_LOGIN_START,
	EMAIL_LOGIN_START,
	CHECK_USER_STATE,
	SING_OUT_START,
	REGISTER_START,
	REGISTER_SUCCESS
} from '../actions/types';
//actions
import {
	loginSuccess,
	loginFailed,
	signOutSuccess,
	signOutFailed,
	registerUserFailed,
	registerUserSuccess
} from '../actions/userActions';
//firebase
import { auth, createUserDoc, googleProvider, getUserAuthSnapShot } from '../../utils/firebase/firebase';

//check to see if user log in
function* isUserLogIn() {
	try {
		const userAuth = yield getUserAuthSnapShot();
		if (!userAuth) return;
		yield dispatchLoginSuccess(userAuth);
	} catch (error) {
		yield put(loginFailed(error));
	}
}
//sign in with google account
function* setAuthWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield dispatchLoginSuccess(user);
	} catch (error) {
		yield put(loginFailed(error));
	}
}

//sign in with email
function* setAuthWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield dispatchLoginSuccess(user);
	} catch (error) {
		yield put(loginFailed(error));
	}
}

//login success or failed
function* dispatchLoginSuccess(user, otherData) {
	try {
		const userRef = yield call(createUserDoc, user, otherData);
		const userSnapShot = yield userRef.get();
		yield put(loginSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
	} catch (error) {
		yield put(loginFailed(error));
	}
}

//register new user
function* registerNewUser({ payload: { displayName, email, password } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(registerUserSuccess({ user, otherData: { displayName } }));
	} catch (error) {
		yield put(registerUserFailed(error));
	}
}
//login after register new user
function* loginAfterRegister({ payload: { user, otherData } }) {
	yield dispatchLoginSuccess(user, otherData);
}

//sign out user
function* signOutUser() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailed());
	}
}
//-------------------------------handlers-----------------------
//user log in ?
export function* onCheckUserState() {
	yield takeLatest(CHECK_USER_STATE, isUserLogIn);
}
//google sign in
export function* signInWithGoogle() {
	yield takeLatest(GOOGLE_LOGIN_START, setAuthWithGoogle);
}
//email sign in
export function* signInWithEmail() {
	yield takeLatest(EMAIL_LOGIN_START, setAuthWithEmail);
}
//sign out
export function* onSignOutUser() {
	yield takeLatest(SING_OUT_START, signOutUser);
}
//register user
export function* onRegister() {
	yield takeLatest(REGISTER_START, registerNewUser);
}
//register success
export function* onRegisterSuccess() {
	yield takeLatest(REGISTER_SUCCESS, loginAfterRegister);
}
//export all
export function* userAuth() {
	yield all([
		call(signInWithGoogle),
		call(signInWithEmail),
		call(onCheckUserState),
		call(onSignOutUser),
		call(onRegister),
		call(onRegisterSuccess)
	]);
}

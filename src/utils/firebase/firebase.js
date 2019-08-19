//import
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { resolve, reject } from 'q';
//config firebase
const config = {

};

firebase.initializeApp(config);

//return user from database or create one
export const createUserDoc = async (userAuth, otherData) => {
	if (!userAuth) return;
	//user doc ref path
	const userRef = fireStore.doc(`users/${userAuth.uid}`);

	const userDoc = await userRef.get();
	//user exits in database or not ?
	if (!userDoc.exists) {
		try {
			const { displayName, email } = userAuth;
			const createdAt = new Date();
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherData
			});
		} catch (error) {
			console.log(error);
		}
	}

	return userRef;
};

//forming collections items
export const newCollectionsItems = collectionsSnapShot => {
	const newCollections = collectionsSnapShot.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return newCollections.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

//adding items
export const addCollectionAndDoc = async (collectionName, objects) => {
	const collectionRef = fireStore.collection(collectionName);

	const batch = fireStore.batch();
	objects.forEach(object => {
		const newDocRef = collectionRef.doc();
		object.items.forEach(item => {
			item.createdAt = new Date();
		});
		batch.set(newDocRef, object);
	});
	return await batch.commit();
};

//user login ?
export const getUserAuthSnapShot = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};
//exports
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

//google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;

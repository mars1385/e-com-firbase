//import
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/validate/PrivateRoute';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { setCurrentUser } from './redux/actions/userActions';
//pages
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Register from './pages/auth-pages/Register';
import Login from './pages/auth-pages/Login';
import CartCheckout from './pages/cart-checkout/CartCheckout';
//header component
import Header from './components/header/Header';
//firebase auth
import { auth, createUserDoc } from './utils/firebase/firebase';

import './App.css';

function App() {
	//component did mount
	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const user = await createUserDoc(userAuth);

				user.onSnapshot(snapShot => {
					store.dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
				});
			} else {
				store.dispatch(setCurrentUser(userAuth));
			}
		});
		//component will unMount
		return () => {
			unsubscribeFromAuth();
		};
	}, []);
	//jsx
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<CartCheckout exact path='/checkout' component={CartCheckout} />
				</div>
			</Router>
		</Provider>
	);
}

export default App;

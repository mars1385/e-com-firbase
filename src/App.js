//import
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//pages
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Register from './pages/auth-pages/Register';
import Login from './pages/auth-pages/Login';
//header component
import Header from './components/header/Header';
//firebase auth
import { auth } from './utils/firebase/firebase';

import './App.css';

function App() {
	//state
	const [currentUser, setCurrentUser] = useState(null);
	//component did mount & update
	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			console.log(currentUser);
		});
		//component will unMount
		return () => {
			unsubscribeFromAuth();
		};
	});
	//jsx
	return (
		<Router>
			<div>
				<Header currentUser={currentUser} />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</div>
		</Router>
	);
}

export default App;

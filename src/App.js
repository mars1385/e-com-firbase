//import
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//pages
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Register from './pages/auth-pages/Register';
import Login from './pages/auth-pages/Login';
//header component
import Header from './components/header/Header';

import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</div>
		</Router>
	);
}

export default App;

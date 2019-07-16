//import
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//pages
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';

import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</div>
		</Router>
	);
}

export default App;

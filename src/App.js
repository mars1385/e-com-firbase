//import
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { checkUserSate } from './redux/actions/userActions';
import { PersistGate } from 'redux-persist/integration/react';
//pages
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Register from './pages/auth-pages/Register';
import Login from './pages/auth-pages/Login';
import CartCheckout from './pages/cart-checkout/CartCheckout';
//header & footer component
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
	//redux
	const { store, persistor } = reduxStore;
	//component did mount
	useEffect(() => {
		store.dispatch(checkUserSate());
	}, []);
	//jsx
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<div>
						<Header />
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/checkout' component={CartCheckout} />
						<Footer />
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;

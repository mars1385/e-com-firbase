//import
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { checkUserSate } from './redux/actions/userActions';
import { PersistGate } from 'redux-persist/integration/react';
//header & footer component
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//error boundary
import ErrorBoundary from './components/error-boundaries/ErrorBoundary';
//spinner
import SpinnerOnly from './components/spinner/SpinnerOnly';

import './App.css';

//code splitting with react lazy (our pages)
const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'));
const Register = lazy(() => import('./pages/auth-pages/Register'));
const Login = lazy(() => import('./pages/auth-pages/Login'));
const CartCheckout = lazy(() => import('./pages/cart-checkout/CartCheckout'));

function App() {
	//redux
	const { store, persistor } = reduxStore;
	//component did mount
	useEffect(() => {
		store.dispatch(checkUserSate());
	}, [store]);
	//jsx
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<div>
						<Header />
						<ErrorBoundary>
							<Suspense fallback={<SpinnerOnly />}>
								<Route exact path='/' component={HomePage} />
								<Route path='/shop' component={ShopPage} />
								<Route exact path='/login' component={Login} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/checkout' component={CartCheckout} />
							</Suspense>
						</ErrorBoundary>
						<Footer />
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;

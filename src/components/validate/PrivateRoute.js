//import
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
	//redux state
	const currentUser = useSelector(state => state.user.currentUser);
	return <Route {...rest} render={props => (currentUser ? <Component {...props} /> : <Redirect to='/' />)} />;
};

export default PrivateRoute;

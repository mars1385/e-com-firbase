//import
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
	return (
		<div className='site-navbar'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option mx-1' to='/'>
					Home
				</Link>
				<Link className='option mx-1' to='/shop'>
					Shop
				</Link>
				<Link className='option mx-1' to='/login'>
					Log in
				</Link>
				<Link className='option mx-1' to='/register'>
					Sign in
				</Link>
			</div>
		</div>
	);
};

export default Header;

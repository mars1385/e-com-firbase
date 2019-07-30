//import
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { createStructuredSelector } from 'reselect';
//bag components
import BagIcon from '../shopping-bag-icon/BagIcon';
import BagDropDown from '../bag-icon-drop-down/BagDropDown';
//auth
import { auth } from '../../utils/firebase/firebase';
//redux
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/selectors/userSelectors';
import { toggle } from '../../redux/selectors/cartSelectors';

const Header = () => {
	//redux state
	const { currentUser, hidden } = useSelector(
		createStructuredSelector({
			currentUser: currentUserSelector,
			hidden: toggle
		})
	);
	//jsx
	return (
		<div className='site-navbar'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option ' to='/'>
					Home
				</Link>
				<Link className='option ' to='/shop'>
					Shop
				</Link>
				{currentUser ? (
					<div className='option ' onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<div>
						<Link className='option ' to='/login'>
							Log in
						</Link>
						<Link className='option ' to='/register'>
							Sign in
						</Link>
					</div>
				)}
				<BagIcon />
			</div>
			{hidden === false ? <BagDropDown /> : null}
		</div>
	);
};

export default Header;

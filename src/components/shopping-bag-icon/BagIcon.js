//import
import React from 'react';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import './BagIcon.scss';
//redux
import { useDispatch } from 'react-redux';
import { setToggle } from '../../redux/actions/bagActions';

const BagIcon = () => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(setToggle());
	};
	//jsx
	return (
		<div className='bag' onClick={onClick}>
			<Bag className='icon-shopping-bag' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default BagIcon;

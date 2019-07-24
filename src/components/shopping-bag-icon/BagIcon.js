//import
import React from 'react';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import './BagIcon.scss';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../redux/actions/cartActions';
import { countCartItemsSelector } from '../../redux/selectors/cartSelectors';

const BagIcon = () => {
	//redux
	const count = useSelector(countCartItemsSelector);
	const dispatch = useDispatch();
	//on and off
	const onClick = () => {
		dispatch(setToggle());
	};
	//jsx
	return (
		<div className='bag' onClick={onClick}>
			<Bag className='icon-shopping-bag' />
			<span className='item-count'>{count}</span>
		</div>
	);
};

export default BagIcon;

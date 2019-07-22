//import
import React from 'react';
import ButtonGroup from '../form-input/ButtonGroup';
import './BagDropDown.scss';

const BagDropDown = () => {
	//jsx
	return (
		<div className='bag-drop-down'>
			<div className='bag-items' />
			<ButtonGroup>GO TO CHECKOUT</ButtonGroup>
		</div>
	);
};

export default BagDropDown;

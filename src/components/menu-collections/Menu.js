//import
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './Menu.scss';
//redux
import { useSelector } from 'react-redux';
import { collectionsSelector } from '../../redux/selectors/menuSelectors';

const Menu = () => {
	//state
	const collections = useSelector(collectionsSelector);
	//jsx
	return (
		<div className='menu'>
			{collections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</div>
	);
};

export default Menu;

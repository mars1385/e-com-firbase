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
		<div className='menu mt-5'>
			<div className='container'>
				<div class='title-section mb-5 '>
					<h2 class='text-uppercase'>
						<span class='d-block'>Discover</span> The Collections
					</h2>
				</div>
			</div>
			{collections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</div>
	);
};

export default Menu;

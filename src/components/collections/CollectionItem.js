//import
import React from 'react';
import PropTypes from 'prop-types';
import './CollectionsItem.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
	return (
		<div className='col-lg-5 col-md-5 item-entry mb-5 mx-auto  collection-item'>
			<div className='image rounded' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	);
};

CollectionItem.propTypes = {};

export default CollectionItem;

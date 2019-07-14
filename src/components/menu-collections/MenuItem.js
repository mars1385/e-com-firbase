import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ title, imageUrl, size }) => {
	console.log(size);
	//jsx
	return (
		<div className={`menu-item ${size}`}>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>Shop Now</span>
			</div>
		</div>
	);
}; //end jsx

//checking props
MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	size: PropTypes.string
};

export default MenuItem;

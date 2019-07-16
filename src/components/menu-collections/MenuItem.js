//import
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
	//changing url
	const onClick = () => {
		history.push(`${match.url}${linkUrl}`);
	};
	//jsx
	return (
		<div className={`menu-item ${size}`} onClick={onClick}>
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
	linkUrl: PropTypes.string.isRequired,
	size: PropTypes.string
};

export default withRouter(MenuItem);

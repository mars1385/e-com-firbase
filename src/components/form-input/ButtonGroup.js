//import
import React from 'react';

import './ButtonGroup.scss';

const ButtonGroup = ({ children, ...otherProps }) => {
	return (
		<button className='custom-btn' {...otherProps}>
			{children}
		</button>
	);
};

export default ButtonGroup;

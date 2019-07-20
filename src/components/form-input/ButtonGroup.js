//import
import React from 'react';

import './ButtonGroup.scss';

const ButtonGroup = ({ children, googleSignIn, ...otherProps }) => {
	return (
		<button className={`${googleSignIn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
			{children}
		</button>
	);
};

export default ButtonGroup;

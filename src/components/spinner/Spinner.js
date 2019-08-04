//import
import React from 'react';
import './Spinner.scss';

const Spinner = Component => ({ loading, ...otherProps }) => {
	return loading ? (
		<div className='col-md-9 order-1 SpinnerOverlay'>
			<div className='SpinnerContainer' />
		</div>
	) : (
		<Component {...otherProps} />
	);
};

export default Spinner;

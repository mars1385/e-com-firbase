//import
import React from 'react';
import SpinnerOnly from './SpinnerOnly';

const Spinner = Component => ({ loading, ...otherProps }) => {
	return loading ? <SpinnerOnly /> : <Component {...otherProps} />;
};

export default Spinner;

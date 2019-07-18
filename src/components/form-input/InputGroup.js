//import
import React from 'react';
import PropTypes from 'prop-types';
import './InputGroup.scss';
const InputGroup = ({ name, value, label, type, onChange }) => {
	return (
		<div className='group'>
			<input className='form-input' type={type} value={value} name={name} onChange={onChange} required />
			{label ? (
				<label className={`${value.length ? 'shrink' : ''} form-input-label`} htmlFor={name}>
					{label}
				</label>
			) : null}
		</div>
	);
};
//validate
InputGroup.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string,
	type: PropTypes.string
};

InputGroup.defaultProps = {
	type: 'text'
};

export default InputGroup;

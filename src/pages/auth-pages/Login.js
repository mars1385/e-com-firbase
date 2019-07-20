//import
import React, { useState } from 'react';
import './Auth.scss';
import InputGroup from '../../components/form-input/InputGroup';
import ButtonGroup from '../../components/form-input/ButtonGroup';
//auth
import { signInWithGoogle } from '../../utils/firebase/firebase';

const Login = () => {
	//component state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//tracking user input change
	const onChange = e => {
		const { name, value } = e.target;
		if (name === 'email') {
			setEmail(value);
		} else {
			setPassword(value);
		}
	};

	//log in
	const onSubmit = e => {
		e.preventDefault();
		setEmail('');
		setPassword('');
	};
	//jsx
	return (
		<div className='container login'>
			<h2 className='title'>Log in by email and password</h2>
			<form onSubmit={onSubmit}>
				<InputGroup name='email' value={email} onChange={onChange} label='email' />
				<InputGroup label='password' type='password' name='password' value={password} onChange={onChange} />
				<div className='buttons'>
					<ButtonGroup type='submit'>Log in</ButtonGroup>
					<ButtonGroup onClick={signInWithGoogle} googleSignIn>
						Sign In with Google
					</ButtonGroup>
				</div>
			</form>
		</div>
	);
};

export default Login;

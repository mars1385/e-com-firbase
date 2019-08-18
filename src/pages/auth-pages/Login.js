//import
import React, { useState, useEffect } from 'react';
import './Auth.scss';
import InputGroup from '../../components/form-input/InputGroup';
import ButtonGroup from '../../components/form-input/ButtonGroup';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelector } from '../../redux/selectors/userSelectors';
import { googleLoginStart, emailLoginStart } from '../../redux/actions/userActions';

const Login = props => {
	//component state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	//redux state
	const currentUser = useSelector(currentUserSelector);
	const dispatch = useDispatch();
	//component did mount & update
	useEffect(() => {
		if (currentUser) {
			props.history.push('/');
		}
	});
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
	const onSubmit = async e => {
		e.preventDefault();
		//send
		const userAuth = {
			email,
			password
		};
		dispatch(emailLoginStart(userAuth));
		//clear
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
					<ButtonGroup type='button' onClick={() => dispatch(googleLoginStart())} googleSignIn>
						Sign In with Google
					</ButtonGroup>
				</div>
			</form>
		</div>
	);
};

export default Login;

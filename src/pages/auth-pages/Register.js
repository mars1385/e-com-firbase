//import
import React, { useState, useEffect } from 'react';
import './Auth.scss';
import InputGroup from '../../components/form-input/InputGroup';
import ButtonGroup from '../../components/form-input/ButtonGroup';
import { auth, createUserDoc } from '../../utils/firebase/firebase';
//redux
import { useSelector } from 'react-redux';

const Register = props => {
	//component state
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	//redux state
	const currentUser = useSelector(state => state.user.currentUser);
	//component did mount & update
	useEffect(() => {
		if (currentUser) {
			props.history.push('/');
		}
	});
	//register filed change
	const onChange = e => {
		const { name, value } = e.target;
		if (name === 'name') {
			setName(value);
		} else if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		} else {
			setConfirmPassword(value);
		}
	};
	//form submit
	const onSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords dose not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserDoc(user, { displayName: name });
			setName('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		} catch (error) {
			console.log(error);
		}
	};
	//jsx
	return (
		<div className='container register'>
			<h2 className='title'>Register with your email and password</h2>
			<form onSubmit={onSubmit}>
				<InputGroup name='name' value={name} onChange={onChange} label='name' />
				<InputGroup name='email' value={email} onChange={onChange} label='email' />
				<InputGroup label='password' type='password' name='password' value={password} onChange={onChange} />
				<InputGroup
					label='confirmPassword'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={onChange}
				/>
				<ButtonGroup type='submit'>Register</ButtonGroup>
			</form>
		</div>
	);
};

export default Register;

/** @format */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Signup() {
	const emailRef = useRef();
	const passwordlRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	let navigate = useNavigate();
	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordlRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordlRef.current.value);
			navigate('/dashboard');
		} catch {
			setError('Failed to creat an account');
		}
		setLoading(false);
	}

	return (
		<div>
			<div class='rounded overflow-hidden shadow-lg'>
				<h2 class='text-center mb-4'>Sign Up</h2>
				<span
					class='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
					role='alert'>
					{error && <span class='font-medium'> {error}</span>}
				</span>
				<form onSubmit={handleSubmit}>
					<div id='email'>
						<label>Email</label>
						<input type='email' ref={emailRef} required />
					</div>

					<div id='password'>
						<label>Password</label>
						<input type='password' ref={passwordlRef} required />
					</div>

					<div id='password-confirm'>
						<label>Confirm Password</label>
						<input type='password' ref={passwordConfirmRef} required />
					</div>

					<button
						disabled={loading}
						class='w-100 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						Sign Up
					</button>
				</form>
			</div>
			<div className='w-full text-center mt-2'>
				Already have an account? <Link to='/login'>Log In</Link>
			</div>
		</div>
	);
}

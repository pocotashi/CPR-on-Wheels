/** @format */

import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	const emailRef = useRef();
	const passwordlRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	let navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordlRef.current.value);
			navigate('/dashboard');
		} catch {
			setError('Failed to log in');
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

					<button
						disabled={loading}
						class='w-100 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						Log In
					</button>

					<div className='w-100 text-center mt-3'>
						<Link to='/forgot-password'>Forgot Password?</Link>
					</div>
				</form>
			</div>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</div>
	);
}

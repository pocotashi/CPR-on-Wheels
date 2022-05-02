/** @format */

import { useAuth } from '../../contexts/AuthContext';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox for further instructions');
		} catch {
			setError('Failed to Reset password');
		}
		setLoading(false);
	}

	return (
		<div>
			<div>
				<div>
					<h2 className='text-center mb-4'>Password Reset</h2>
					<span
						class='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{error && <span class='font-medium'> {error}</span>}
					</span>
					<span
						class='p-4 mb-4 text-sm text-green-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{message && <span class='font-medium'> {message}</span>}
					</span>
					<form onSubmit={handleSubmit}>
						<div id='email'>
							<label>Email</label>
							<input type='email' ref={emailRef} required />
						</div>

						<button disabled={loading} className='w-100 mt-3' type='submit'>
							Reset Password
						</button>
					</form>

					<div className='w-100 text-center mt-2'>
						<Link to='/login'>Log In</Link>
					</div>
				</div>
			</div>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</div>
	);
}

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
		<div class='bg-sky-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 mx-auto mt-20 text-cyan-900'>
			<div>
				<h2 class='text-2xl'>Password Reset</h2>
				<span
					class='mb-4 text-lg rounded text-red-700 dark:bg-red-200 dark:text-red-800'
					role='alert'>
					{error && <span class='font-medium px-4'> {error}</span>}
				</span>
				<span
					class='mb-4 text-lg rounded text-emerald-700 dark:bg-emerald-200 dark:text-emerald-800'
					role='alert'>
					{message && <span class='font-medium px-4'> {message}</span>}
				</span>
				<form onSubmit={handleSubmit}>
					<div id='email' class='mb-4'>
						<label class='block text-grey-darker text-sm font-bold mb-2 text-left '>
							Email
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
							type='email'
							ref={emailRef}
							required
						/>
					</div>

					<button
						disabled={loading}
						clas='w-100 mt-3'
						type='submit'
						class='w-100 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
						Reset Password
					</button>
				</form>

				<div className='w-100 text-center mt-2'>
					<Link to='/login'>Log In</Link>
				</div>
			</div>

			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</div>
	);
}

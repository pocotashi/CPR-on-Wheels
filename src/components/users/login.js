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
			<img
				src='../images/luffy.WebP'
				alt='learn cpr firsaid AED'
				class='mx-auto p-10'
				width={300}
				height={300}
			/>
			<div class='bg-sky-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 mx-auto mt-20 text-cyan-900'>
				<div>
					<h2 class='text-2xl'>Log In</h2>
					<span
						class='mb-4 text-lg rounded text-red-700 dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{error && <span class='font-medium px-4 '> {error}</span>}
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

						<div id='password' class='mb-6'>
							<label class='block text-grey-darker text-sm font-bold mb-2 text-left'>
								Password
							</label>
							<input
								class='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
								type='password'
								ref={passwordlRef}
								required
							/>
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
		</div>
	);
}

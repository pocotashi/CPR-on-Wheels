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
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const formRef = useRef();

	let navigate = useNavigate();
	function handleClick() {
		navigate('/courses/search-courses');
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordlRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordlRef.current.value);
			formRef.current.reset();
			setMessage('Successfully signed up');
		} catch {
			setError('Failed to create an account');
		}
		setLoading(false);
	}

	return (
		<div>
			<img src='../images/luffy1.jpeg' alt='' class='mx-auto p-10' />

			<div class='bg-sky-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 mx-auto mt-20 text-cyan-900'>
				<div>
					<h2 class='text-2xl'>Sign Up</h2>
					<span
						class='mb-4 text-lg rounded text-emerald-700 dark:bg-emerald-200 dark:text-emerald-800'
						role='alert'>
						{message && <span class='font-medium px-4'> {message}</span>}
					</span>
					<span
						class='mb-4 text-lg rounded text-red-700 dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{error && <span class='font-medium px-4 '> {error}</span>}
					</span>
					<form onSubmit={handleSubmit} ref={formRef}>
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
							<label class='block text-grey-darker text-sm font-bold mb-2 text-left '>
								Password
							</label>
							<input
								class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
								type='password'
								ref={passwordlRef}
								required
							/>
						</div>

						<div id='password-confirm' class='mb-4'>
							<label class='block text-grey-darker text-sm font-bold mb-2 text-left '>
								Confirm Password
							</label>
							<input
								class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
								type='password'
								ref={passwordConfirmRef}
								required
							/>
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

			<div class='pt-10'>
				<h1 class='text-indigo-900 text-3xl'>Ready to register for a class?</h1>
				<button
					class='w-100 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={handleClick}>
					Get Started
				</button>
			</div>
		</div>
	);
}

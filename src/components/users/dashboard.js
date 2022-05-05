/** @format */

import { useAuth } from '../../contexts/AuthContext';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	let navigate = useNavigate();

	async function handleLogout() {
		setError('');

		try {
			await logout();
			navigate('/');
		} catch {
			setError('Failed to log out');
		}
	}
	return (
		<div class='bg-sky-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 mx-auto mt-20 text-cyan-900'>
			<div>
				<div>
					<h2 className='text-2xl'>Profile</h2>
					<span
						class='mb-4 text-lg rounded text-red-700 dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{error && <span class='font-medium px-4'> {error}</span>}
					</span>
					<strong>Email:</strong> {currentUser.email}
					<Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
						Update Profile
					</Link>
				</div>
			</div>
			<div className='w-100 text-center mt-2'>
				<button
					variant='link'
					onClick={handleLogout}
					class='w-100 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
					Log Out
				</button>
			</div>
		</div>
	);
}

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
			navigate('/login');
		} catch {
			setError('Failed to log out');
		}
	}
	return (
		<div class='items-center justify-center min-h-screen w-full'>
			<div>
				<div>
					<h2 className='text-center mb-4'>Profile</h2>
					<span
						class='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
						role='alert'>
						{error && <span class='font-medium'> {error}</span>}
					</span>
					<strong>Email:</strong> {currentUser.email}
					<Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
						Update Profile
					</Link>
				</div>
			</div>
			<div className='w-100 text-center mt-2'>
				<button variant='link' onClick={handleLogout}>
					Log Out
				</button>
			</div>
		</div>
	);
}

/** @format */

import React from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';

function Register() {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [email, setEmail] = React.useState('');

	const [registration, setRegistration] = React.useState([]);

	const register = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, 'registration'), {
			name: name,
			phone: Number(phone),
			email: email,
		});

		setName('');
		setPhone('');
		setEmail('');
	};

	React.useEffect(() => {
		const data = query(collection(db, 'registration'));
		const unsub = onSnapshot(data, (querySnapshot) => {
			let registerArr = [];
			querySnapshot.forEach((doc) => {
				registerArr.push({ ...doc.data(), id: doc.id });
			});
			setRegistration(registerArr);
		});
		return () => unsub();
	}, []);

	return (
		<div>
			<div className='flex items-center justify-center min-h-screen'>
				<div className='px-8 py-5 mx-4 mt-4 text-left md:w-1/3 lg:w-1/3 sm:w-1/3 text-rose-400'>
					<h3 className='text-2xl font-bold text-center'>
						Add Student Information
					</h3>
					<form>
						<div className='mt-4'>
							<div>
								<label className='block' for='Name'>
									Name
								</label>
								<input
									type='text'
									placeholder='Name'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='mt-4'>
								<label className='block' for='email'>
									Email
								</label>
								<input
									type='text'
									placeholder='Email'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className='mt-4'>
								<label className='block'>Phone Number</label>
								<input
									type='number'
									placeholder='Phone number'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>

							<div className='flex'>
								<button
									className='w-1/2 px-6 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-emerald-400'
									onClick={register}>
									Add Student
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;

/** @format */

import React from 'react';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-300 text-teal-700 '>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between '>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start '>
						<a
							className='text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase '
							href='/'>
							Hands on <br /> Hearts
						</a>
						<button
							className=' cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								id='menu-button'
								className='h-6 w-6 cursor-pointer lg:hidden block'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75'
									href='/about'>
									<span className='ml-2'>ABOUT</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75'
									href='/courses'>
									<span className='ml-2'>COURSES</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75'
									href='/resources'>
									<span className='ml-2'>RESOURCES</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75'
									href='/contact'>
									<span className='ml-2'>CONTACT US</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75'
									href='/login'>
									<span className='ml-2'>LOG IN</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

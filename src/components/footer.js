/** @format */

import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
export default function Footer() {
	return (
		<footer class='md:flex  bg-sky-300  text-left mt-20 text-indigo-900  '>
			<div class='md:flex-row md:w-1/2 '>
				<img class='w-1/2 py-5 ' alt='footer-icon' src='../images/cpr.png' />

				<div class='pl-7 xl:pl-16'>
					<h3>Hands on Hearts</h3>
					<p class='py-4'>
						<a href='/' class='pr-3'>
							Home
						</a>
						|
						<a href='/blog' class='px-3'>
							Blog
						</a>
						|
						<a href='/about' class='px-3'>
							About
						</a>
						|
						<a href='/contact' class='px-3'>
							Contact
						</a>
					</p>

					<p class='text-sm pb-10'>© 2022, Hands on Hearts LLC.</p>
				</div>
			</div>

			<div class='pl-7 py-5 md:flex-row md:w-1/2 '>
				<p class='text-base lg:pr-20 lg:-ml-14'>
					<span class='text-xl font-bold block pb-5'>About the company</span>
					We are a licensed Red cross training provider. We offer CPR, AED,
					First Aid and Lifeguarding Courses.
				</p>
				<div class='lg:-ml-14 pt-10'>
					<h3 class='text-2xl bold'>Follow Us</h3>
					<div class='md:inline-block pt-8'>
						<a href='https://www.facebook.com/'>
							<BsFacebook class='text-xl w-9 h-9 md:mr-3' />
						</a>
					</div>
					<div class='md:inline-block'>
						<a href='https://twitter.com/'>
							<BsTwitter class='text-xl w-9 h-9 md:mx-3' />
						</a>
					</div>
					<div class=' md:inline-block'>
						<a href='https://www.instagram.com/?hl=en'>
							<BsInstagram class='text-xl w-9 h-9 md:mx-3' />
						</a>
					</div>
				</div>
			</div>

			{/* <div class='md:flex-row  pl-7 py-5 md:w-1/3'>
				
			</div> */}
		</footer>
	);
}

/** @format */
import {
	FlagIcon,
	PaperAirplaneIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid';

export default function Footer() {
	return (
		<footer class='md:flex bg-sky-300  text-left mt-20 text-indigo-900 justify-center items-center'>
			<div class='md:flex-row pl-5 '>
				<img class='w-1/2 py-5 ' alt='' src='../images/cpr.png' />

				<h3>About Hands on Hearts</h3>

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

			<div class='p-3 md:p-5 md:flex '>
				<p class='text-base lg:pr-20 lg:-ml-14'>
					<span class='text-xl font-bold block pb-5'>About the company</span>
					We are a licensed Red cross training provider. We offer CPR, AED,
					First Aid and Lifeguarding Courses.
				</p>
				<a href='https://www.facebook.com/' class=' md:flex-row pr-2 '>
					<FlagIcon class='text-2xl w-9 h-9 my-2	' />
					Facebook
				</a>
				<a href='https://twitter.com/' class='px-2'>
					<PaperAirplaneIcon class='text-2xl w-9 h-9 my-2' />
					Twitter
				</a>
				<a href='https://www.instagram.com/?hl=en' class='px-2'>
					<VideoCameraIcon class='text-2xl w-9 h-9 my-2' />
					Instagram
				</a>
			</div>
		</footer>
	);
}

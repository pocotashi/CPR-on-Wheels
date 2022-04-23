/** @format */
import {
	FlagIcon,
	LocationMarkerIcon,
	MailIcon,
	PaperAirplaneIcon,
	PhoneIcon,
	PuzzleIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid';

export default function Footer() {
	return (
		<div>
			<footer class='md:flex bg-rose-300 w-full text-left  p-14 mt-20 text-cyan-900'>
				<div class='md:flex-row md:w-1/3 '>
					<img
						class='w-1/3 h-1/2 py-4'
						alt=''
						src='https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782'
					/>

					<h3 class='m-none py-4'>About CPR on Wheels</h3>

					<p class='py-4'>
						<a href='/' class='pr-4'>
							Home
						</a>
						|
						<a href='/blog' class='px-4'>
							Blog
						</a>
						|
						<a href='/about' class='px-4'>
							About
						</a>
						|
						<a href='/contact' class='px-4'>
							Contact
						</a>
					</p>
					<p class='text-sm pb-10'>© 2022, CPR on Wheels LLC.</p>
				</div>

				<div class='md:flex-row md:w-1/3 justify-items'>
					<div class=''>
						<LocationMarkerIcon class='text-2xl w-9 h-9 align-middle rounded-full text-center my-2.5 mx-4 ' />
						<p class=''>
							<span>420 Joint Rd, N suite w</span>
							Seattle, WA 98105
						</p>
					</div>

					<div>
						<PhoneIcon class=' text-2xl w-9 h-9 align-middle rounded-full text-center my-2.5 mx-4' />
						<p>+1 420-424-4242</p>
					</div>
					<div>
						<MailIcon class=' text-2xl w-9 h-9 align-middle rounded-full text-center my-2.5 mx-4' />

						<p class='pb-10'>
							<a href='mailto:support@eduonix.com'>support@cpronwheels.com</a>
						</p>
					</div>
				</div>
				<div class='md:flex-row md:w-1/3 leading-5'>
					<p class='text-base '>
						<span class='text-xl font-bold block pb-5'>About the company</span>
						We are a licensed Red cross training provider. We offer CPR, AED,
						First Aid and Lifeguarding Courses.
					</p>
					<div class='md:flex py-8'>
						<a href='https://www.facebook.com/' class='pr-4 '>
							<FlagIcon class='text-2xl w-9 h-9 my-2	' />
							Facebook
						</a>
						<a href='https://twitter.com/' class='px-4'>
							<PaperAirplaneIcon class='text-2xl w-9 h-9 my-2' />
							Twitter
						</a>
						<a href='https://www.instagram.com/?hl=en' class='px-4'>
							<VideoCameraIcon class='text-2xl w-9 h-9 my-2' />
							Instagram
						</a>
						<a href='https://www.linkedin.com/' class='pl-4'>
							<PuzzleIcon class='text-2xl w-9 h-9 my-2' />
							LinkedIn
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

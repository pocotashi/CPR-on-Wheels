/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const featuredImages = [
	'http://nebula.wsimg.com/59fcbd0994e1177d6f2625e07b87019b?AccessKeyId=739B0F1844975B73CBDD&disposition=0&alloworigin=1',
	'https://www.redcross.org/on/demandware.static/-/Sites-RedCross-Library/default/dw3bd57b10/images/Category-pages/aed-block-2-Mobile.jpg',
	'https://www.redcross.org/content/dam/redcross/training-services/category-page-content-blocks/lifeguarding/lifeguarding-block-1-Mobile.jpg',
	'https://i0.wp.com/runwildmychild.com/wp-content/uploads/2020/11/KidsFirstAid-18.jpg?fit=1200%2C840&ssl=1',
];

let count = 0;

let slideInterval;

export default function CoursePage() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = '/courses/search-courses';
		navigate(path);
	};

	const [isOpen, setOpen] = React.useState(false);

	const [currentIndex, setCurrentIndex] = React.useState(0);

	const slideRef = React.useRef();

	React.useEffect(() => {
		startSlider();
		return () => {
			pauseSlider();
		};
	}, []);

	const startSlider = () => {
		slideInterval = setInterval(() => {
			handleOnNextClick();
		}, 5000);
	};

	const pauseSlider = () => {
		clearInterval(slideInterval);
	};

	const handleOnNextClick = () => {
		count = (count + 1) % featuredImages.length;
		setCurrentIndex(count);
	};
	const handleOnPrevClick = () => {
		count = (currentIndex + featuredImages.length - 1) % featuredImages.length;
		setCurrentIndex(count);
	};
	return (
		<div>
			<div>
				<form>
					<div>
						<p>
							<label for='search-courses'>You're interested in</label>
							<input
								id='search-courses'
								type='search'
								placeholder='search for courses'
								maxlength='150'
							/>
						</p>
						<input type='hidden' />
						<button
							class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
							onClick={routeChange}>
							Find Courses
						</button>
					</div>
				</form>
			</div>

			<div id='banner' class='static overflow-hidden'>
				<video loop autoPlay={true} class='w-full'>
					<source
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/videos/banner-home-lg3.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>

			<div class='relative mx-20 md:-mt-36 mt-26 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 overflow-visible'>
				<div class='rounded overflow-visible shadow-xl bg-white py-10'>
					<img
						class='mx-auto'
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/img/search-icon.svg'
						alt=''></img>
					<div class='px-6 py-4'>
						<div class='font-bold text-xl mb-2'>search by instructor</div>
						<p class='text-gray-700 text-base'>
							Come see our team of talented and certified instructors.
						</p>

						<button
							class='relative inline-flex items-center justify-center p-0.5 my-5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
									'_blank',
								)
							}>
							<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
								Explore qualified Instructors{' '}
							</span>
						</button>
					</div>
				</div>

				<div class='rounded overflow-visible shadow-xl bg-white py-10'>
					<img
						class='mx-auto w-24 h-24'
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/img/quiz-icon.svg'
						alt=''></img>
					<div class='px-6 py-4'>
						<div class='font-bold text-xl mb-2'>search by courses</div>
						<p class='text-gray-700 text-base'>
							American Red Cross First Aid CPR & AED certification and
							Lifeguarding training in New York City.
						</p>
						<button
							class='relative inline-flex items-center justify-center p-0.5 my-5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
							onClick={routeChange}>
							<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
								Explore our Courses{' '}
							</span>
						</button>
					</div>
				</div>
			</div>

			<div class='md:flex justify-center items-center h-80 mx-24 md:mx-32'>
				<div class=' text-center '>
					<img
						class='h-64 md:h-52 max-w-xs md:max-w-none my-5'
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/img/about-us-icon.svg'
						alt=''
					/>
				</div>

				<div class='flex-nowrap text-center py-5 mx-0'>
					<h2 class='text-2xl md:text-3xl'>
						<b>You’re emphatatic and determined,</b> so come learn some life
						saving skills.
					</h2>
				</div>
			</div>

			<div class='bg-gray-200 py-24 h-auto mt-24 flex justify-center items-center'>
				<ul class=' max-w-5xl grid grid-cols-1 mx-auto w-9/12'>
					<li class='list-none'>
						<div class='bg-cyan-200  float-none md:float-left w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>
						<div class='bg-cyan-200  float-none md:float-right w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>
					</li>

					<li class='list-none'>
						<div class='bg-cyan-200  float-none md:float-left w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>
						<div class='bg-cyan-200  float-none md:float-right w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>
					</li>

					<li class='list-none'>
						<div class='bg-cyan-200  float-none md:float-left w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>

						<div class='bg-cyan-200  float-none md:float-right w-1/2'>
							<h3 class='text-2xl'>Amazing Stories Start Right Here</h3>
						</div>
					</li>
				</ul>
			</div>

			<div class='mx-auto max-w-screen-lg py-16 px-6 md:mb-11'>
				<h1 class='text-3xl text-center'>
					Innovation <b>for Impact</b>
				</h1>

				<iframe
					src='https://www.youtube.com/embed/r9jwGansp1E'
					frameborder='0'
					allow=' autoplay; encrypted-media; '
					allowfullscreen
					class='w-full mx-auto py-10'
					title='vid'></iframe>
			</div>

			{/* carousel section */}

			<div class="bg-[url('https://tbcdn.talentbrew.com/company/1732/v4_1/img/background-texture-v2.jpg')] bg-cover">
				<div class='flex flex-col items-center justify-center h-screen '>
					<img
						class='w-full md:w-2/5 h-2/5 md:1/5'
						src={featuredImages[currentIndex]}
						alt=''
					/>

					<h1 class='text-5xl items-center pt-20 text-emerald-500'>
						Start your journey, come learn CPR.
					</h1>
					{/* 
					<div className='w-full px-3 flex justify-between '>
						<button
							className='bg-black text-white p-1 rounded-full cursor-pointer hover:bg-opacity-100 transition'
							onClick={handleOnPrevClick}>
							<ChevronLeftIcon size={100} />
						</button>
						<button
							className='bg-black text-white p-1 rounded-full cursor-pointer hover:bg-opacity-100 transition'
							onClick={handleOnNextClick}>
							<ChevronRightIcon size={100} />
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
}

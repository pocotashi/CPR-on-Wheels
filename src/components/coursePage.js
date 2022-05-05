/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoursePage() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = '/courses/search-courses';
		navigate(path);
	};

	return (
		<div>
			<div>
				<form class='bg-slate-50'>
					<div class='flex items-center justify-center p-10 mx-auto'>
						<p class='h-10 text-lg mr-5'>
							<input
								id='search-courses'
								type='search'
								placeholder='search for courses'
								class='h-full border-solid border-2 rounded p-3'
								name='q'
								aria-label='Search through site content'
							/>
						</p>
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

			<div class=' md:flex md:-mt-36 mt-26 p-10 gap-5 overflow-hidden justify-center'>
				<div class='rounded overflow-visible shadow-xl bg-white py-10 mb-10 md:mb-0'>
					<img
						class='mx-auto'
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/img/search-icon.svg'
						alt=''></img>
					<div class='px-6 py-4'>
						<div class='font-bold text-xl mb-2'>search by instructor</div>
						<p class='text-gray-700 text-base'>
							Come see our team of talented and certified instructors.
						</p>
						<br />

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

				<div class='rounded overflow-visible shadow-xl bg-white py-10 md:flex-row '>
					<img
						class='mx-auto w-24 h-24'
						src='https://tbcdn.talentbrew.com/company/1732/v4_1/img/quiz-icon.svg'
						alt=''></img>
					<div class='px-6 py-4'>
						<div class='font-bold text-xl mb-2'>search by courses</div>
						<p class='text-gray-700 text-base '>
							American Red Cross First Aid
							<br /> CPR & AED certification and BLS training in New York City.
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

			<div class='md:flex justify-center items-center h-80 mx-auto px-20'>
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

			{/* amazing Stories */}
			<div class='bg-gray-200 py-24 h-auto  mt-32 md:mt-24 '>
				<ul class='mx-auto max-w-5xl w-full md:w-3/4'>
					<li class='list-none'>
						<div class='md:h-auto md:flex '>
							<div class='md:flex-row md:w-1/2'>
								<img
									src='../images/DIB-amazing-stories.jpeg'
									alt='amazing stories start here'
								/>
							</div>

							<div class='bg-cyan-900 md:w-1/2 p-10 text-left lg:text-center text-white items-center justify-center'>
								<h3 class='text-xl'>
									You belong <br /> <b>in our story</b>
								</h3>
								<p class='text-sm '>
									We’re celebrating the voices of our associates whose unique
									stories reflect how identity and perspective shape new
									chapters. Explore how our stories and our journeys inspire
									excellence, impact communities, foster personal growth and
									pave the way as we rise together to leave our mark on the
									world.
								</p>
							</div>
						</div>
					</li>

					<li class='list-none'>
						<div class='md:flex h-auto justify-center text-left lg:text-center content-center'>
							<div class='md:flex-row md:w-1/2 md:order-last'>
								<img
									src='../images/life-at-cap-one.jpeg'
									class='w-full'
									alt=''
								/>
							</div>
							<div class='bg-cyan-900 md:w-1/2 md:order-first p-10 text-white'>
								<h3 class='text-xl'>
									Learning at , <br /> <b>CPR on Wheels</b>
								</h3>
								<p class='text-sm '>
									Individually and collectively, we’re impacting millions of
									people and shaping the future of banking. Every day, we work
									alongside some of the brightest, most resilient people in the
									industry, each doing their part to make a difference by
									building strong communities and delivering truly disruptive
									tech.
								</p>
							</div>
						</div>
					</li>

					<li class='list-none'>
						<div class='md:flex h-auto'>
							<div class='md:flex-row  md:w-1/2'>
								<img
									src='../images/changing-banking.jpeg'
									alt=''
									class='w-full'
								/>
							</div>

							<div class='bg-cyan-900  md:w-1/2 p-10 items-center justify-center text-left lg:text-center text-white'>
								<h3 class='text-xl  '>
									Changing rescuing for good, <br /> <b>for all</b>
								</h3>
								<p class='text-sm '>
									We’re committed to building a diverse and inclusive workforce.
									We know that it only takes one person to make an impact, and
									if we want to change banking for good, we need different
									perspectives that represent the customers we innovate for and
									serve every day.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>

			{/* video section  */}
			<div class='mx-auto max-w-screen-lg py-16 md:mb-11'>
				<h1 class='text-3xl md:text-6xl text-center text-cyan-900 pb-10'>
					Innovation <b>for Impact</b>
				</h1>

				<div class='relative aspect-video overflow-hidden'>
					<iframe
						src='https://www.youtube.com/embed/r9jwGansp1E'
						frameborder='0'
						allow='autoplay'
						title='vid'
						allowFullScreen
						class='absolute top-0 left-0 border-0 self-center overflow-hidden w-full h-full '></iframe>
				</div>
			</div>
		</div>
	);
}

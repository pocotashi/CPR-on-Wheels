/** @format */

export default function Home() {
	return (
		<div>
			<div class='relative overflow-hidden rounded-lg shadow-lg cursor-pointer'>
				<div class='absolute top-1/3 left-1/3 md:top-1/3 md:left-1/3'>
					{' '}
					<h1 class='mb-3 text-xl md:text-6xl xl:text-8xl font-semibold tracking-tight text-indigo-900'>
						{' '}
						Lend a <b>hand</b> <small class='font-thin'>to</small> <br />
						Save a <b>life</b>, <br /> Be a <b>Hero</b>{' '}
					</h1>{' '}
					<a
						href='/courses/search-courses'
						class='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-rose-400 transition duration-300 ease-out border-2 border-rose-500 rounded-full shadow-md group'>
						<span class='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease'>
							<svg
								class='w-6 h-6'
								fill='current'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
							</svg>
						</span>
						<span class='absolute flex items-center justify-center w-full h-full text-red-500 text-xl font-bold transition-all duration-300 transform group-hover:translate-x-full ease'>
							Get Started
						</span>
						<span class='relative invisible'>Get Started</span>
					</a>
				</div>{' '}
				<img
					src='../images/hoh.jpeg'
					class='object-cover w-full h-2/3'
					alt='slogan'
				/>
			</div>
			<section class='md:flex justify-center items-center '>
				<div class='justify-center sm:justify-left mx-4 py-6'>
					<img
						class='mx-auto'
						src='https://www.humankind.org/wp-content/uploads/2018/08/ems-icon-doing-cpr-e1534816990562.png'
						alt=''
					/>
				</div>

				<div class='mx-4 py-6'>
					<h1 class='font-sans font-normal text-6xl text-rose-500 leading-relaxed'>
						Hands on Hearts
					</h1>
					<p class='font-sans font-normal text-xl text-rose-500 leading-relaxed'>
						Aquatics & Safety Training and Certifications for New York City
					</p>
				</div>
			</section>

			<section class='card'>
				<div class='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
					<a href='/courses'>
						<div class='rounded overflow-hidden shadow-lg'>
							<img
								class='w-full'
								src='https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_laptop_computers.jpg'
								alt='courses'
							/>
							<div class='px-6 py-4'>
								<div class='font-bold text-xl mb-2'>COURSES</div>
								<p class='text-gray-700 text-base'>
									American Red Cross First Aid CPR & AED certification training
									in New York City.
								</p>
							</div>
						</div>
					</a>

					<a href='/resources'>
						<div class='rounded overflow-hidden shadow-lg'>
							<img
								class='w-full'
								src='https://www.coopersalehallschool.co.uk/cooper-content/uploads/2021/06/cio-book-list-600x339.png'
								alt='resources'
							/>
							<div class='px-6 py-4'>
								<div class='font-bold text-xl mb-2'>RESOURCES</div>
								<p class='text-gray-700 text-base'>
									Information on Aquatic programs and other resources for the
									courses we offer.
								</p>
							</div>
						</div>
					</a>

					<a href='/blog'>
						<div class='rounded overflow-hidden shadow-lg'>
							<img
								class='w-full'
								src='https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_desktop_computers.jpg'
								alt='blog'
							/>
							<div class='px-6 py-4'>
								<div class='font-bold text-xl mb-2'>BLOG</div>
								<p class='text-gray-700 text-base'>
									Checkout our Blog and read about expriences with cpr and first
									aid.{' '}
								</p>
								<br />
							</div>
						</div>
					</a>
				</div>
			</section>
		</div>
	);
}

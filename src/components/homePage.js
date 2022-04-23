/** @format */

export default function Home() {
	return (
		<div class='py-6'>
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
						CPR ON WHEELS
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

							{/* <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
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
							{/* <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                    </div> */}
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
								<p class='text-gray-700 text-base'>Checkout our Blog.</p>
								<br />
							</div>
							{/* <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                    </div> */}
						</div>
					</a>
				</div>
			</section>
		</div>
	);
}

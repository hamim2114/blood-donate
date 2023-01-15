import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    return (
        <section className="container mx-auto px-4 lg:px-14 -mb-2 mt-[75px]">
		{/* <!-- profile start --> */}
		<section className="my-4">
			<div className="grid grid-cols-1 gap-y-4 xl:gap-x-6 xl:grid-cols-12">
				<aside className="flex flex-col col-span-12 gap-4 md:flex-row xl:flex-col xl:col-span-3">
					<div className="w-full overflow-hidden bg-white rounded-lg">
						<div className="p-4">
							<div className="container">
								<div className="avatar-upload">
									<div className="avatar-edit">
										<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
										<label for="imageUpload">
											<i className="fas fa-camera ml-2 mt-2 text-white"></i>
										</label>
									</div>
									<div className="avatar-preview">
										<div id="imagePreview" style={{backgroundImage: 'url(http://i.pravatar.cc/500?img=7)'}}>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center text-gray-600">
								<h4 className="py-2 text-sm font-bold">Pabel Hossain</h4>
								<div className="text-sm flex items-center flex-col">
									<div className="flex gap-x-2 items-center">
										<i className="fas fa-phone-alt"></i>
										<p>4565454-54544</p>
									</div>
									<div className="flex gap-x-2 items-center mt-1">
										<i className="fas fa-envelope"></i>
										<p>john@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
						<div className="p-2 bg-[#B7DEC0]">
							<div className="flex justify-center">
								<a href="./basic_info.html">
									<i className="text-white far fa-edit text-xl"></i>
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Profile Section End --> */}
					<div className="w-full bg-white rounded-lg text-gray-600">
						<div className="p-4">
							<div className="flex gap-x-2 items-center justify-between">
								<div className="flex gap-x-1 items-center">
									<i className="fas fa-id-card"></i>
									<p>NID</p>
								</div>
								<div className="flex items-center">
									<div className="bg-green-800 p-1.5 text-white text-xs rounded hover:bg-green-700">
										<Link to={'/profile/nid-verify'}>Verify</Link> 
									</div>
								</div>
							</div>
							<div className="flex gap-x-2 items-center justify-between mt-5">
								<div className="flex gap-x-1 items-center">
									<i className="fas fa-id-card"></i>
									<p>BRN</p>
								</div>
								<div className="flex items-center">
									<div className="bg-green-800 p-1.5 text-white text-xs rounded hover:bg-green-700">
										<Link to={'/profile/brn-verify'}>Verify</Link> 
									</div>
								</div>
							</div>
							<div className="flex gap-x-2 items-center justify-between mt-10">
								<div className="flex gap-x-1 items-center">
									<i className="fas fa-key"></i>
									<p>Password</p>
								</div>
								<div className="flex items-center">
									<div className="bg-green-800 p-1.5 px-2.5 text-white text-xs rounded hover:bg-green-700">
										<Link to={'/profile/change-password'}>Edit</Link> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>

				{/* <!-- right side start --> */}
				<section className="col-span-12 lg:col-span-9">
					{/* <!-- progress bar start --> */}
					<div className="progress">
						<div className="bar w-[85%]">
							<p className="percent font-bold">Profile 85% Complete</p>
						</div>
					</div>
					{/* <!-- progress bar end --> */}

					{/* <!-- basic profile start --> */}
					<section className="bg-white rounded">
						<div className="p-2 mt-4">
							<div className="w-full flex flex-col sm:flex-row gap-2">
								<div className="w-full mt-2">
									<label className="inline-block p-2 text-base" for="first name">Name</label>
									<input
									className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
									type="text" placeholder="Name"/>
								</div>
								<div className="w-full mt-2">
									<label className="inline-block p-2 text-base" for="Father's Name">Father's Name</label>
									<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
										type="text" placeholder="Father's Name"/>
								</div>
								<div className="w-full mt-2">
									<label className="inline-block p-2 text-base" for="Mother's Name">Mother's Name</label>
									<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
										type="text" placeholder="Mother's Name"/>
								</div>
							</div>
							<div className="w-full flex flex-col sm:flex-row gap-2">
								<div className="w-full">
									<label className="inline-block p-2 mt-2 text-base" for="Gender">Gender</label>
									<div className="relative inline-flex w-full">
									<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
										xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
										stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
									<select
										className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
										<option>Male</option>
										<option>Female</option>
										<option>Other</option>
									</select>
									</div>
								</div>
								<div className="w-full mt-2">
									<label className="inline-block p-2 text-base" for="Email">Email</label>
									<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
										type="email" placeholder="Email"/>
								</div>
								<div className="w-full mt-2">
									<label className="inline-block p-2 text-base" for="Phone Number">Phone Number</label>
									<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
										type="number" placeholder="Phone Number"/>
								</div>
							</div>
							<div className="w-full flex flex-col sm:flex-row gap-2">
								<div className="w-full">
									<label className="inline-block p-2 mt-2 text-base" for="Blood Group">Blood Group</label>
									<div className="relative inline-flex w-full">
									<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
										xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
										stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
									<select
										className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
										<option>O+</option>
										<option>O-</option>
										<option>A+</option>
									</select>
									</div>
								</div>
								<div className="w-full">
									<label className="inline-block p-2 mt-2 text-base" for="Occupation">Occupation</label>
									<div className="relative inline-flex w-full">
									<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
										xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
										stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
									<select
										className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
										<option>Teacher</option>
										<option>Student</option>
										<option>Farmer</option>
									</select>
									</div>
								</div>
							</div>

							{/* <!-- address start --> */}
								<div className="mt-5 w-full">
									<div>Select:</div>
									<div className="flex gap-x-6 mt-1">
										<div className="flex items-center py-1 gap-x-4">
											<label className="inline-flex items-center">
												<input type="radio" name="radio" className="w-5 h-5 cursor-pointer text-teal-600 form-radio"
													checked/><span className="ml-2">Present Address</span>
											</label>
										</div>
										<div className="flex items-center py-1 gap-x-4">
											<label className="inline-flex items-center">
												<input type="radio" name="radio" className="w-5 h-5 cursor-pointer text-teal-600 form-radio"
													checked/><span className="ml-2">Permanent Address</span>
											</label>
										</div>
									</div>
								</div>

								{/* <!-- for present address start --> */}
								<div>
									<div className="w-full flex flex-col sm:flex-row gap-2">
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Division">Division</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="District">District</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Upzilla">Upzilla</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
									</div>
									<div className="w-full flex flex-col sm:flex-row gap-2">
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Union">Union</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Ward">Ward</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full mt-2">
											<label className="inline-block p-2 text-base" for="Village">Village</label>
											<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
												type="text" placeholder="Village"/>
										</div>
									</div>
								</div>
								{/* <!-- for present address end --> */}

								{/* <!-- for permanent address start --> */}
								<div className="hidden">
									<div className="w-full flex flex-col sm:flex-row gap-2">
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Division">Division</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="District">District</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Upzilla">Upzilla</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
									</div>
									<div className="w-full flex flex-col sm:flex-row gap-2">
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Union">Union</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label className="inline-block p-2 mt-2 text-base" for="Ward">Ward</label>
											<div className="relative inline-flex w-full">
												<svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2"
													xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
												<select
													className="w-full py-3 pl-5 pr-10 text-gray-600 bg-[#FBFBFB] border border-[#E3E3E3] rounded-md appearance-none bg-gray-light focus:outline-none">
													<option>Dhaka</option>
													<option>Mymensingh</option>
												</select>
											</div>
										</div>
										<div className="w-full mt-2">
											<label className="inline-block p-2 text-base" for="Village">Village</label>
											<input className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
												type="text" placeholder="Village"/>
										</div>
									</div>
								</div>
								{/* <!-- for permanent address end --> */}
							{/* <!-- address end --> */}
						</div>
		  
						{/* <!-- save button start --> */}
						<div className="flex flex-col sm:flex-row justify-end gap-2 p-6">
							<div className="flex gap-2 text-dark">
							  	<div className="px-8 w-full text-center py-3 rounded-lg bg-green-800 font-medium hover:bg-green-700 transition-all text-white border cursor-pointer">
									<a href="#">Save</a> 
								</div>
							</div>
						</div>
						{/* <!-- save button end --> */}
					</section>
					{/* <!-- basic profile end --> */}
				</section>
				{/* <!-- right side end --> */}
			</div>
		  </section>
		  {/* <!-- profile end --> */}
    </section>
    );
};

export default Profile;
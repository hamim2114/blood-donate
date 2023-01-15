import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';

const ChangePassword = () => {
    return (
        <div className='bg-gray-100'>
            <NavBar/>
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

					{/* <!-- password change start --> */}
					<section className="bg-white rounded">
						<div className="p-2 mt-4">
							<h3 className="text-2xl font-semibold">Change Password</h3>
							<div className="w-full flex flex-col">
								<div className="w-1/2 mt-2">
									<label className="inline-block p-2 text-base" for="Current Password">Current Password</label>
									<div className="flex w-full border border-gray-300 rounded-md">
										<div className="flex items-center justify-between relative w-full rounded-md text-gray-700 overflow-hidden ">
											<input type="password" id="password1"
												className="w-full overflow-hidden px-4 py-3 text-lg bg-[#FBFBFB] focus:outline-none focus:rounded-none rounded-md placeholder:text-gray-500"
												placeholder="Current Password"/>
											<div className="bg-[#FBFBFB] absolute right-1 px-4">
												<i className="far fa-eye cursor-pointer" id="togglePassword1"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/2 mt-2">
									<label className="inline-block p-2 text-base" for="New Password">New Password</label>
									<div className="flex w-full border border-gray-300 rounded-md">
										<div className="flex items-center justify-between relative w-full rounded-md text-gray-700 overflow-hidden ">
											<input type="password" id="password2"
												className="w-full overflow-hidden px-4 py-3 text-lg bg-[#FBFBFB] focus:outline-none focus:rounded-none rounded-md placeholder:text-gray-500"
												placeholder="New Password"/>
											<div className="bg-[#FBFBFB] absolute right-1 px-4">
												<i className="far fa-eye cursor-pointer" id="togglePassword2"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/2 mt-2">
									<label className="inline-block p-2 text-base" for="Confirm Password">Confirm Password</label>
									<div className="flex w-full border border-gray-300 rounded-md">
										<div className="flex items-center justify-between relative w-full rounded-md text-gray-700 overflow-hidden ">
											<input type="password" id="password3"
												className="w-full overflow-hidden px-4 py-3 text-lg bg-[#FBFBFB] focus:outline-none focus:rounded-none rounded-md placeholder:text-gray-500"
												placeholder="Confirm Password"/>
											<div className="bg-[#FBFBFB] absolute right-1 px-4">
												<i className="far fa-eye cursor-pointer" id="togglePassword3"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
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
					{/* <!-- password change end --> */}
				</section>
				{/* <!-- right side end --> */}
			</div>
		</section>
		{/* <!-- profile end --> */}
    </section>
    <Footer/>
        </div>
    );
};

export default ChangePassword;
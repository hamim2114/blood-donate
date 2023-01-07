import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="relative mt-[4.5rem] text-white body-font footer">
		<a href="#" class="call">
			<i class="fas fa-phone-alt my-float"></i>
		</a>
		{/* company slider section Start */}
		<section className="absolute w-full text-white rounded -top-12 body-font">
			<div className="container mx-auto px-24">
				<div className="relative py-2 px-2 rounded-2xl bg-[#8fdba2]">
					<div className="flex flex-row donation-comapany items-center pl-10">
						<div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
                        <div>
							<img className='h-[50px]' src={logo} alt=""/>
						</div>
						
					</div>
				</div>
			</div>
		</section>
		{/* company slider section End */}
		
		<div className="lg:mt-0">
			<div className="container items-center justify-center md:px-5 py-[14px] mx-auto">
				<div className="flex items-center w-full mt-7 lg:ml-auto lg:mt-2 md:gap-x-36 gap-x-16 justify-center">
					<Link to="/" className="hover:text-green-400">Home</Link>
					<a href="#" className="hover:text-green-400">About</a>
					<a href="#" className="hover:text-green-400">Privacy Policy</a>
				</div>
			</div>
		</div>

		<a href="#" className="message">
			<i className="fas fa-envelope my-float"></i>
		</a>
	</footer>
    );
};

export default Footer;
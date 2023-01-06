import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaWindowClose} from 'react-icons/fa'
import {CiSearch} from 'react-icons/ci'
import {RiArrowDropDownLine} from 'react-icons/ri'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [nav, setNav] = useState(false);

    return (
        <nav className=" lg:mx-[6rem] fixed z-30 w-full mx-auto mt-0 bg-white border-b">
		<div className=" flex flex-wrap items-center justify-between w-full py-0.5 px-0 mx-auto mt-0 bg-white">
			<div className="flex items-center pl-6 sm:pl-0">
				<Link to="/">
					<img src={logo} className="h-16"/>
				</Link>
			</div>
			<div className="block pr-4 lg:hidden">
				<button onClick={()=> setNav(!nav)}>
						{nav ? <GiHamburgerMenu size={30}/> : <FaWindowClose size={30}/>}
				</button>
			</div>
			<div className={`z-20 flex-grow ${nav ? 'hidden' : 'flex'} w-full bg-white sm:bg-transparent overflow-hidden p-0 mt-4 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:p-0`}
				>
				<div className="w-full divide-y divide-y-gray-100 lg:divide-y-0 flex lg:items-center flex-col
					ml-0 lg:ml-10 lg:flex-row gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-3.5 justify-left">
					<div>
						<button className="inline-flex relative peer px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500">
							<Link to="/" onClick={()=> setNav(!nav)} className="flex items-center">Home <RiArrowDropDownLine size={30}/></Link>
						</button>
						<ul className="peer-hover:flex absolute hover:flex flex-col bg-white drop-shadow-lg hidden pt-0 shadow text-gray">
							<li className="text-left menu"><Link onClick={()=> setNav(!nav)} className="block py-2 pl-2 whitespace-no-wrap rounded-t px-2 hover:bg-green-700 hover:text-white" to="/speece">Organization's speece</Link></li>
							<li className="text-left menu"><a className="block py-2 pl-2 text-left whitespace-no-wrap px-2 hover:bg-green-700 hover:text-white" href="#">All Documentation</a></li>
							<li className="text-left menu"><a className="block py-2 pl-2 text-left whitespace-no-wrap px-2 hover:bg-green-700 hover:text-white" href="#">Blood Request Cheek</a></li>
						</ul>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#What-We-Do">Donation</a>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#Platform">Blood request
						</a>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#Projects">Income Expenditure 
						</a>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#About-Us">Projects</a>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#Contact">Gallery</a>
					</div>
					<div>
						<a className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-2 hover:text-green-500"
							href="#Contact">Foundations</a>
					</div>
					<div>
						<div className="relative text-gray-600">
							<input name="serch" placeholder="Search" className="w-32 placeholder:text-center bg-white h-9 px-4 pr-7 border border-gray-300 rounded-full text-sm focus:outline-none"/>
							<button type="submit" className="absolute right-0 top-0 mt-3 mr-3 bg-white">
							  <CiSearch/>
							</button>
						</div>
					</div>
					<div>
						<Link className="inline-block px-6 py-4 font-bold text-gray no-underline lg:px-1 hover:text-green-500"
							to="/login">
							Login</Link>
					</div>
				</div>
			</div>
		</div>
	</nav>
    );
};

export default NavBar;
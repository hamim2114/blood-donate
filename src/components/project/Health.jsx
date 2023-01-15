import React from 'react';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import user from '../../assets/images/user.jpeg';

const FoodForAll = () => {
    return (
        <div>
            <NavBar/>

            <section className="container pt-20 mx-auto px-4 lg:px-14" >
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-lg font-bold text-green-700">Health</p>
            </div>
			 {/* Chairman's Speece start  */}
			<div>
				<p className="text-[16px] leading-[28px]">
					<div className="flex flex-col leftFloatDirector">
						<img className="h-96 md:h-[29rem] lg:h-[16rem] rounded-full" src={user} alt="" />
						<p className="text-[14px] font-bold ml-9 mt-3 leading-[28px]">Dr. Md. Khairul Anam</p>
						<p className="text-[14px] font-bold ml-9 mt-1 leading-[24px]">Director</p>
					</div>
					It is a great pleasure for me to bring out the Website of NIDCH. This is the only tertiary level center in the country for management of TB and Chest diseases in Bangladesh. It was established as “TB hospital” in 1955, upgraded in 1962 as “Institute of Chest Diseases and Hospital” and started Post-graduate course “Diploma in Tuberculosis Chest Diseases” and it was the first Post-graduate Institute in Dhaka. It was upgraded in 2002 as “National Institute of Diseases of the Chest and Hospital”. Introduction of “MD course in Chest Diseases” in 1992 and “MS in Thoracic Surgery” in 1999 are the mile stone for the institute in the field of human resource development. Subsequently “FCPS in Pulmonology and Thoracic Surgery” courses introduced & this is also a further addition for development of human resource or the country. 
					Establishment of “National Asthma Centre” in 1997 bring the asthma and COPD management under a uniform “National Guideline”. Establishment of “National Tuberculosis Reference Laboratory” in 2007 strengthen the “Tuberculosis Control Programme” through appropriate diagnosis and management of “MDR-TB” patient which attain quality of WHO defined level and approved by GLC. Introduction of CT Scan in 2007 further improved the diagnosis of 
					the patients and thus made patient management earlier and more perfect. Establishment of Avian-Influenza Ward and Training Center in 2007 is also a major improvement. This institute is also a main center for implementation of GLC approved pilot project DOTS-Plus for management of MDR-TB Patient. We are introducing Plathysmogram, Poly-somnogram, Ergospirometry, DLCOand NO measurement facilities, EVAS and fluorescent bronchoscopy soon.
				</p>

				<p className="text-[16px] leading-[32px]">
					I think the information presented here will be very valuable and helpful in guiding our doctors for planning their future higher studies in the field of chest diseases. I hope it will be very useful for all concerns which will bring modern technologies  in the diagnosis and management of chest disease patients and it will also enable our post-graduate students to update themselves with the modern technologies. We are trying with our utmost sincerity and endeavour to make significant contribution to the commitment of the present government ~ “Digital Bangladesh:.
				</p>
			</div>
			 {/* Chairman's Speece end  */}

			 {/* Other speech start  */}
			<div className="md:flex gap-4 w-full">
				<div className="w-full overflow-x-auto">
					<table className="text-sm text-left text-gray-500 dark:text-gray-400 border-l w-[100%] border-r">
						<thead className="text-xs text-white uppercase bg-green-700">
							<tr>
								<th scope="col" className="px-6 py-3 text-center">
									Member
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Speece
								</th>
							</tr>
						</thead>
						<tbody>
							{/* number 1  */}
							<tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 py-4 text-black border-r flex items-center justify-center">
									<div className="flex flex-col justify-center">
										<div className="flex justify-center w-20 h-20 overflow-hidden bg-red-200 rounded-full">
											<img className="rounded-full" src={user} alt=""/>
										</div>
										<p className="font-bold mt-2 text-[12px]">Dr. Md. Khairul Anam</p>
										<p className="font-bold mt-1 text-[12px]">Director</p>
									</div>							
								</td>
								<td className="px-6 py-4 text-black border-r w-8/12">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores alias atque distinctio, tempore quaerat cupiditate nam provident optio tenetur!. 
										<a className="read-more-show hide text-green-700 font-bold" href="#" id="1">Read More</a> 
										<span className="read-more-content">Suspendisse! Rutrum cupidatat! 
											<a className="read-more-hide hide text-red-500 font-bold" href="#" more-id="1">Read Less</a>
										</span>
									</p>								
								</td>
							</tr>
							 {/* number 2  */}
							<tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 py-4 text-black border-r flex items-center justify-center">
									<div className="flex flex-col justify-center">
										<div className="flex justify-center w-20 h-20 overflow-hidden bg-red-200 rounded-full">
											<img className="rounded-full" src={user} alt=""/>
										</div>
										<p className="font-bold mt-2 text-[12px]">Dr. Md. Khairul Anam</p>
										<p className="font-bold mt-1 text-[12px]">Director</p>
									</div>							
								</td>
								<td className="px-6 py-4 text-black border-r w-8/12">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores alias atque distinctio, tempore quaerat cupiditate nam provident optio tenetur!. 
										<a className="read-more-show hide text-green-700 font-bold" href="#" id="2">Read More</a> 
										<span className="read-more-content">Suspendisse! Rutrum cupidatat! 
											<a className="read-more-hide hide text-red-500 font-bold" href="#" more-id="2">Read Less</a>
										</span>
									</p>								
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full overflow-x-auto">
					<table className="text-sm text-left text-gray-500 dark:text-gray-400 border-l border-r w-[100%]">
						<thead className="text-xs text-white uppercase bg-green-700">
							<tr>
								<th scope="col" className="px-6 py-3 text-center">
									Member
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Speece
								</th>
							</tr>
						</thead>
						<tbody >
							{/* number 3  */}
							<tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 py-4 text-black border-r flex items-center justify-center">
									<div className="flex flex-col justify-center">
										<div className="flex justify-center w-20 h-20 overflow-hidden bg-red-200 rounded-full">
											<img className="rounded-full" src={user} alt=""/>
										</div>
										<p className="font-bold mt-2 text-[12px]">Dr. Md. Khairul Anam</p>
										<p className="font-bold mt-1 text-[12px]">Director</p>
									</div>							
								</td>
								<td className="px-6 py-4 text-black border-r w-8/12">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores alias atque distinctio, tempore quaerat cupiditate nam provident optio tenetur!. 
										<a className="read-more-show hide text-green-700 font-bold" href="#" id="3">Read More</a> 
										<span className="read-more-content">Suspendisse! Rutrum cupidatat! 
											<a className="read-more-hide hide text-red-500 font-bold" href="#" more-id="3">Read Less</a>
										</span>
									</p>								
								</td>
							</tr>
							 {/* number 4  */}
							<tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 py-4 text-black border-r flex items-center justify-center">
									<div className="flex flex-col justify-center">
										<div className="flex justify-center w-20 h-20 overflow-hidden bg-red-200 rounded-full">
											<img className="rounded-full" src={user} alt=""/>
										</div>
										<p className="font-bold mt-2 text-[12px]">Dr. Md. Khairul Anam</p>
										<p className="font-bold mt-1 text-[12px]">Director</p>
									</div>							
								</td>
								<td className="px-6 py-4 text-black border-r w-8/12">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores alias atque distinctio, tempore quaerat cupiditate nam provident optio tenetur!. 
										<a className="read-more-show hide text-green-700 font-bold" href="#" id="4">Read More</a> 
										<span className="read-more-content">Suspendisse! Rutrum cupidatat! 
											<a className="read-more-hide hide text-red-500 font-bold" href="#" more-id="4">Read Less</a>
										</span>
									</p>								
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
			 {/* Other Speech end  */}
        </div>
    </section>
    
    <Footer/>
  </div>
    );
};

export default FoodForAll;
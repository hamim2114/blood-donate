import React from 'react';
import bloodDonate from '../../assets/images/blood-donate.jpg'
import bloodBanner2 from '../../assets/images/blood-banner2.jpg'

const Hero = () => {
    return (
    <>
        <section className="pt-2" >
		<div className="container mx-auto">
			<div className="px-0 lg:px-14 mt-20 w-full mb-2">
				<div className="md:flex gap-x-12 items-start">
					<div className="md:w-3/12">
						<div className="w-full">
							<img className="object-contain w-full h-[14rem]" src={bloodDonate}/>
						</div>
					</div>
					<div className="border border-gray-200 md:py-0 py-6 mt-8 md:w-6/12">
						 {/* vedio section start  */}
						{/* <div className="w-full hidden">
							<video autoplay="" loop="" controls="" className="h-[17.2rem] w-full object-fit">
								<source type="video/mp4" src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"/>
							</video>
						</div> */}
						 {/* vedio section end  */}

						 {/* image section start  */}
						<div className="w-full">
							<img className="object-cover w-full object-center xl:h-[17.2rem]" src={bloodBanner2}/>
						</div>
						{/* image section end  */}

						 {/* flash news start  */}
						<div className="mt-0 ">
							<div className="marquee">
								<div className="marquee__item">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit qui earum accusantium ipsum quisquam, placeat sit ipsam necessitatibus? Debitis!
									<span className="marquee__seperator">+++</span>
								</div>
								<div className="marquee__item">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit qui earum accusantium ipsum quisquam, placeat sit ipsam necessitatibus? Debitis!
									<span className="marquee__seperator">+++</span>
								</div>
								<div className="marquee__item">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit qui earum accusantium ipsum quisquam, placeat sit ipsam necessitatibus? Debitis!
									<span className="marquee__seperator">+++</span>
								</div>
								<div className="marquee__item">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit qui earum accusantium ipsum quisquam, placeat sit ipsam necessitatibus? Debitis!
									<span className="marquee__seperator">+++</span>
								</div>
							</div>
						</div>
						 {/* flash news end  */}
					</div>
				</div>
			</div>
		</div>
	</section>

    {/* visitors start */}
    <section className="md:mt-0 mt-8">
        <div className="container px-4 lg:px-14 text-white mx-auto">
            <div className="flex justify-between items-center">
                <div className="rounded-md h-16 w-44 p-4 flex flex-col items-center justify-center bg-yellow-300">
                    <p className="text-green-700 font-bold">Ours Visitor’s</p>
                    <p className="text-green-700 font-extrabold text-2xl" id="count1"></p>
                </div>
                <div className="rounded-md h-16 w-44 p-4 flex flex-col items-center justify-center bg-yellow-300">
                    <p className="text-green-700 font-bold">Total Member’s</p>
                    <p className="text-green-700 font-extrabold text-2xl" id="count2"></p>
                </div>
            </div>
        </div>
    </section>
    {/* visitors end */}
</>
    );
};

export default Hero;
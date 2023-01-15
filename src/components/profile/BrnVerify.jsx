import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import NavBar from "../home/NavBar";

const BrnVerify = () => {
  return (
    <div className="bg-gray-100">
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
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label for="imageUpload">
                          <i className="fas fa-camera ml-2 mt-2 text-white"></i>
                        </label>
                      </div>
                      <div className="avatar-preview">
                        <div
                          id="imagePreview"
                          style={{
                            backgroundImage:
                              "url(http://i.pravatar.cc/500?img=7)",
                          }}
                        ></div>
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

              {/* <!-- brn verify start --> */}
              <section className="bg-white rounded">
                <div className="p-2 mt-4">
                  <h3 className="text-2xl font-semibold">BRN Information</h3>
                  <div className="rounded border mt-2">
                    {/* <!-- Tabs --> */}
                    <ul
                      id="tabs"
                      className="inline-flex pt-2 px-1 w-full border-b"
                    >
                      <li className="bg-gray-100 px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px">
                        <a id="default-tab" href="#first">
                          Fill Up
                        </a>
                      </li>
                      <li className="px-4 text-gray-800 font-semibold py-2 rounded-t">
                        <a href="#second">Upload</a>
                      </li>
                    </ul>

                    {/* <!-- Tab Contents --> */}
                    <div id="tab-contents">
                      <div id="first" className="p-4">
                        <div className="w-full flex flex-col sm:flex-row gap-2">
                          <div className="w-full mt-2">
                            <label
                              className="inline-block p-2 text-base"
                              for="BRN Number"
                            >
                              BRN Number
                            </label>
                            <input
                              className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
                              type="number"
                              placeholder="BRN Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div id="second" className="hidden p-4">
                        <div className="w-full flex flex-col sm:flex-row gap-2">
                          <div className="w-full mt-2">
                            <label
                              className="inline-block p-2 text-base"
                              for="Upload File"
                            >
                              Upload File
                            </label>
                            <input
                              className="w-full bg-[#FBFBFB] px-4 border border-[#E3E3E3] py-3 text-base font-normal text-gray-800 placeholder-[#AFAFAF] rounded-md bg-gray-light focus:outline-none"
                              type="file"
                              placeholder="Upload File"
                            />
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
              {/* <!-- brn verify end --> */}
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

export default BrnVerify;

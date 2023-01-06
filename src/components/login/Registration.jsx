import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import NavBar from "../home/NavBar";

const Registration = () => {
  return (
    <div>
    <NavBar/>
      <section className="container pt-[6rem] pb-[2.8rem] mx-auto px-4 lg:px-14">
        <section className="body-font w-full flex items-center justify-center">
          <div className="bg-green-100 text-gray-600 w-6/12 rounded-lg py-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-2xl font-bold text-green-700">Registration</p>
            </div>
            <div className="mt-3 w-full px-6 py-2">
              <div className="w-full">
                <div className="flex items-center mt-5">
                  <div className="flex w-full border border-gray-300 rounded-md">
                    <button className="flex items-center justify-center required px-5 py-1 border-r">
                      <div className="font-semibold text-center text-gray-400">
                        <i className="fas fa-phone-alt pt-3 text-xl"></i>
                      </div>
                    </button>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md text-gray-700 focus:outline-blue-400 text-lg focus:rounded-none placeholder:text-gray-500"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="flex w-full border border-gray-300 rounded-md">
                    <button className="flex items-center justify-center px-5 py-1 border-r">
                      <div className="font-semibold text-center text-gray-400">
                        <i className="fas fa-envelope pt-3 text-xl"></i>
                      </div>
                    </button>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md text-gray-700 focus:outline-blue-400 text-lg focus:rounded-none placeholder:text-gray-500"
                      placeholder="Enter your email (optional)"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="flex w-full border border-gray-300 rounded-md">
                    <button className="flex items-center justify-center required px-5 py-1 border-r">
                      <div className="font-semibold text-center text-gray-400">
                        <i className="fas fa-key pt-3 text-xl"></i>
                      </div>
                    </button>
                    <div className="flex items-center justify-between relative w-full rounded-md text-gray-700 ">
                      <input
                        type="password"
                        id="password"
                        className="w-full overflow-hidden px-4 py-3 text-lg focus:outline-blue-400 focus:rounded-none rounded-md placeholder:text-gray-500"
                        placeholder="Enter your password"
                      />
                      <div className="bg-white absolute right-1 px-4">
                        <i className="far fa-eye" id="togglePassword"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center cursor-pointer justify-center text-lg w-full mt-5 py-3 text-white rounded-md d-btn bg-green-700 hover:bg-green-800">
                  Login
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-sm">
                    If you have an account!
                    <span className="text-green-700 font-semibold cursor-pointer ml-1 text-base">
                      <Link to="/login">Please Login</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
};

export default Registration;

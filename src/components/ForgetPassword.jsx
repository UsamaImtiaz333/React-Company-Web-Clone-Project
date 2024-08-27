import React from "react";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-primary-one">
      <div className="text-white text-center mb-6">
        <h1 className="text-lg sm:text-3xl font-bold">Forgot your password?</h1>
        <h2 className="text-sm sm:text-lg mt-2">
          Enter your email and we’ll send you a link on your email.
        </h2>
      </div>
      <div className="relative w-full md:w-[562px] bg-white py-4 px-4 rounded-xl shadow-md mt-14 flex flex-col items-center">
        <div className="absolute -top-12 bg-white rounded-full px-5 py-8">
          <img src={logo} alt="Logo" className="w-16 sm:w-20" />
        </div>
        <form className="w-full mt-8 flex flex-col items-center space-y-4">
          <label className="flex flex-col w-[364px]">
            <h1 className="text-[14px] font-medium">Email </h1>
            <input
              placeholder="mail@test.com"
              className="p-2 w-[364px] h-[52px] border border-l border-black rounded-[4px] outline-gray-500 mt-1"
            />
          </label>
          <button className="px-10 py-2 text-white bg-primary-one rounded-[5px]">
            <Link to="/checkboxs">Forget Password</Link>
          </button>
          <div className="flex mt-4">
            <h1 className="text-sm">Back to</h1>
            <Link to="/" className="text-sm text-primary-one font-bold ml-1">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

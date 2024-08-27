import React from "react";
import logo from "./../images/logo.png";
import EyeIcon from "@/icons/EyeIcon";
import { Link } from "react-router-dom";

const RestPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-primary-one">
      <div className="text-white text-center flex flex-col gap-5 mb-10">
        <h1 className="text-lg md:text-[42px] font-bold">
          Reset your password?
        </h1>
        <h2 className="text-sm sm:text-lg text-[24px]">
          Enter your new password and submit
        </h2>
      </div>
      <div className="relative sm:w-[90%] md:w-[35%] bg-white rounded-xl shadow-md mt-14 flex flex-col justify-center items-center w-full max-w-[562px] h-auto p-8">
        <div className="absolute -top-12 bg-white rounded-full px-5 py-8">
          <img src={logo} alt="Logo" className="w-16 sm:w-20" />
        </div>
        <form className="w-full mt-8 flex flex-col justify-center items-center space-y-6">
          <label className="flex flex-col w-full relative max-w-[484px]">
            <h1 className="text-[14px] font-medium">New Password</h1>
            <input
              placeholder="Enter New Password"
              className="p-4 border outline-gray-500 rounded-tl-md rounded-tr-md w-full h-[52px] pr-10 text-[16px] mt-1"
            />
            <div className="absolute right-4 top-2/3 transform -translate-y-1/2">
              <EyeIcon />
            </div>
          </label>
          <label className="flex flex-col w-full relative max-w-[484px]">
            <h1 className="text-[14px] font-medium">Confirm Password</h1>
            <input
              placeholder="Re-Enter Password"
              className="p-4 border outline-gray-500 rounded-bl-md rounded-br-md w-full h-[52px] pr-10 text-[16px] mt-1"
            />
            <div className="absolute right-4 top-2/3 transform -translate-y-1/2">
              <EyeIcon />
            </div>
          </label>
          <div>
            <button className="w-full max-w-[222px] h-[50px] text-white bg-primary-one rounded-[8px]">
              Reset Password
            </button>
            <div className="text-center flex flex-row text-[12px]">
              <h6 className="text-sm">Already have an account?</h6>
              <Link
                to="/loginform"
                className="text-sm text-primary-one font-bold ml-1"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestPassword;

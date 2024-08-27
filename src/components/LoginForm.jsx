import React from "react";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleCheckBoxs = () => {
    navigate("/checkboxs");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-primary-one">
      <div className="text-white text-center mb-6">
        <h1 className="text-[42px] sm:text-3xl font-bold">
          Let’s Get Started Now!
        </h1>
        <h2 className="text-[24px] sm:text-lg mt-2 font-normal">
          Login to your Account by entering email and password
        </h2>
      </div>
      <div className="relative w-full max-w-[562px] h-[462px] bg-white py-4 px-4 rounded-xl shadow-md mt-14 flex flex-col justify-center items-center">
        <div className="absolute -top-12 bg-white rounded-full px-5 py-8">
          <img src={logo} alt="Logo" className="w-16 sm:w-20" />
        </div>
        <form className="w-full mt-8 flex flex-col justify-center items-center space-y-4">
          <label className="flex flex-col w-full max-w-[364px]">
            <h1 className="text-[14px] font-medium">Email </h1>
            <input
              className="p-4 border outline-gray-500 rounded-[4px] w-full h-[52px] pr-10 text-[16px] mt-1"
              type="email"
            />
          </label>
          <label className="flex flex-col w-full max-w-[364px]">
            <h1 className="text-[14px] font-medium">Password </h1>
            <input
              className="p-4 border outline-gray-500 rounded-[4px] w-full h-[52px] pr-10 text-[16px] mt-1"
              type="password"
            />
          </label>
          <button
            className="w-[220px] h-[50px] py-[12.6px] bg-primary-one text-white rounded-[6px] outline-none"
            onClick={handleCheckBoxs}
            type="submit"
          >
            Sign In
          </button>
          <div className="mt-4 text-center">
            <Link to="/forgetpassword" className="text-sm text-primary-one">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

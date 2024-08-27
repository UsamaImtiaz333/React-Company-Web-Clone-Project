import React from "react";
import circle from "./../images/circle.png";

const CheckBoxs = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-primary-one">
      <div className="relative w-full sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white py-20 rounded-xl shadow-md mt-14 flex flex-col justify-center items-center">
        <div>
          <img src={circle} alt="Logo" className="w-32" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-6">
          <h2 className="text-2xl">Check your inbox.</h2>
          <p>We’ve sent you a link to set your password.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxs;

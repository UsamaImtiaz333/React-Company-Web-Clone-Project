import React from "react";
import logo from "./../images/logo.png";
import DashboardIcon from "@/icons/DashboardIcon";
import ShedulIcon from "@/icons/ShedulIcon";
import InvoiceIcon from "@/icons/InvoiceIcon";
import ProductIcon from "@/icons/ProductIcon";
import OderIcon from "@/icons/OderIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import LogOutIcon from "@/icons/LogOutIcon";

const SideNavBar = () => {
  return (
    <div className="shadow-2xl bg-white w-72 min-h-screen">
      <div className="w-full flex justify-center items-center p-5">
        <img src={logo} alt="logo-img" />
      </div>
      <hr />
      <div className="w-full h-full ml-5">
        <ul className="text-primary-one flex flex-col gap-12 mt-10 text-xs font-normal cursor-pointer">
          <li className="flex flex-row gap-5">
            <DashboardIcon /> Dashboard
          </li>
          <li className="flex flex-row gap-5">
            <ShedulIcon /> Schedule Timings
          </li>
          <li className="flex flex-row gap-5">
            <InvoiceIcon /> Invoices
          </li>
          <li className="flex flex-row gap-5">
            <ProductIcon /> Products
          </li>
          <li className="flex flex-row gap-5">
            <OderIcon /> Orders
          </li>
          <li className="flex flex-row gap-5">
            <ProfileIcon /> My Profile
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-start justify-center absolute bottom-5">
        <hr className="mt-5 w-72" />
        <div className="ml-5 text-primary-one items-center text-[12px] font-normal p-5 ">
          <a href="/" className="flex flex-row gap-2 items-center">
            <LogOutIcon />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;

import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex h-30 w-full flex-row  items-center justify-between shadow-lg">
        <img
          src="/assets/1.png"
          alt="Tether"
          className="my-4 ml-4 w-[10rem] md:w-[20rem] h-[2rem] md:h-[4rem]"
        />
        <div className="flex flex-row items-center space-x-8 mr-8">
          <span className="font-bold text-lg">Home</span>
          <span className="font-bold text-lg">Our Services</span>
          <span className="font-bold text-lg">About Us</span>
          <span className="font-bold text-lg">FAQs</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full md:hidden px-2 py-4">
        <IoMenu size={28} />
        <img src="/assets/1.png" alt="Tether" className="w-[10rem] h-[2rem]" />
      </div>
    </>
  );
};

export default Header;

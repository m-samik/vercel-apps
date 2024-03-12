import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex h-14 w-full flex-row  items-center justify-between bg-[#17181E]">
        <img
          src="/assets/logo.svg"
          alt="Tether"
          className="my-4 ml-4 w-[10rem] h-[2rem] "
        />
        <div className="flex flex-row items-center space-x-8 mr-8">
          <span className="text-sm">Home</span>
          <span className="text-sm">Our Services</span>
          <span className="text-sm">FAQs</span>
          <span className="text-sm">Contact Us</span>
        </div>
      </div>
      <div className="flex bg-[#17181E] h-14 flex-row items-center justify-between w-full md:hidden px-2 py-4">
        <IoMenu size={28} />
        <img
          src="/assets/logo.svg"
          alt="Tether"
          className="w-[10rem] h-[2rem]"
        />
      </div>
    </>
  );
};

export default Header;

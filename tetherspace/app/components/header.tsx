"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMenu, IoCloseCircle } from "react-icons/io5";

const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (route: string) => {
    router.push(route);
    toggleDrawer();
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#17181E] bg-transparent/95 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={toggleDrawer}
          className="flex flex-row items-center justify-end p-4"
        >
          <IoCloseCircle size={28} />
        </div>

        <div className="flex flex-col items-center pt-10 space-y-8">
          <span
            onClick={() => handleNavigation("/")}
            className="text-xl cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleNavigation("/#services")}
            className="text-xl cursor-pointer"
          >
            Our Services
          </span>
          <span
            onClick={() => handleNavigation("/#faqs")}
            className="text-xl cursor-pointer"
          >
            FAQs
          </span>
          <span
            onClick={() => handleNavigation("/#contactus")}
            className="text-xl cursor-pointer"
          >
            Contact Us
          </span>
        </div>
      </div>
      <div className="fixed top-0 hidden md:flex h-14 w-full flex-row  items-center justify-between bg-[#17181E]">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <img
            src="/assets/logo.svg"
            alt="Tether"
            className="my-4 ml-4 w-[10rem] h-[2rem] "
          />
        </div>

        <div className="flex flex-row items-center space-x-8 mr-8">
          <span
            onClick={() => router.push("/")}
            className="text-sm cursor-pointer"
          >
            Home
          </span>
          <Link href="#services">
            <span className="text-sm cursor-pointer">Our Services</span>
          </Link>
          <Link href="#faqs">
            <span className="text-sm cursor-pointer">FAQs</span>
          </Link>

          <Link href="#contactus">
            <span className="text-sm cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </div>
      <div className="fixed top-0 flex bg-[#17181E] h-14 flex-row items-center justify-between w-full md:hidden px-2 py-4">
        <div onClick={toggleDrawer}>
          <IoMenu size={28} />
        </div>
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

"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-gradient-to-r from-[#FFF5E1] to-[#FFFDFA] p-10 md:p-20">
        <div className="flex flex-col items-center">
          <h1 className="text-md md:text-2xl text-black text-center font-bold">
            Embark on Your Crypto Journey Today!
          </h1>
          <button
            onClick={() => router.push("#contactus")}
            className="bg-orange-400 py-2 px-4 rounded-md mt-4 text-center"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="h-64 bg-[#17181E] flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-8 text-sm md:text-lg">
          <span className="text-sm">Home</span>
          <span className="text-sm">Our Services</span>
          <span className="text-sm">FAQs</span>
          <span className="text-sm">Contact Us</span>
        </div>
        <div className="flex flex-row space-x-8 pt-8">
          <FaXTwitter size={22} />
          <FaFacebook size={22} />
          <FaInstagram size={22} />
        </div>
        <div className="pt-8 text-white/80">
          <h1 className="text-sm">© 2024 tetherspace</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;

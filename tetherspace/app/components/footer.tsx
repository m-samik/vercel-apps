"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { images } from "../libs/constants";
import CryptoCarousel from "./crypto-carousel";

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

      <div className="bg-[#FFF5E1] py-10">
        <CryptoCarousel />
      </div>
      <footer className="bg-[#17181E] py-8 px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col md:space-x-8 md:flex-row justify-center items-center text-sm">
          <span
            onClick={() => {
              router.push("/");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => {
              router.push("#services");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            Our Services
          </span>
          <span
            onClick={() => {
              router.push("#faqs");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            FAQs
          </span>
          <span
            onClick={() => {
              router.push("#contactus");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            Contact Us
          </span>
          <span
            onClick={() => {
              router.push("/terms-and-conditions");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            Terms & Conditions
          </span>
          <span
            onClick={() => {
              router.push("/privacy-policy");
            }}
            className="mb-4 md:mb-0 cursor-pointer"
          >
            Privacy Policy
          </span>
        </div>
        <div className="flex justify-center items-center space-x-8 pt-4 md:pt-8">
          <FaXTwitter size={22} className="text-white" />
          <FaFacebook size={22} className="text-white" />
          <FaInstagram size={22} className="text-white" />
        </div>
        <div className="pt-4 md:pt-8 text-white/80 text-center">
          <h1 className="text-sm">© 2024 tetherspace</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

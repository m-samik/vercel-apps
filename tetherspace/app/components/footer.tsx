import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-64 bg-black flex flex-col justify-center items-center">
      <div className="flex flex-row space-x-8 text-lg">
        <span>Home</span>
        <span>Our Services</span>
        <span>About Us</span>
        <span>FAQs</span>
      </div>
      <div className="flex flex-row space-x-8 pt-8">
        <FaXTwitter size={22} />
        <FaFacebook size={22} />
        <FaInstagram size={22} />
      </div>
      <div className="pt-8 text-white/80">
        <h1>© 2024 tetherspace</h1>
      </div>
    </div>
  );
};

export default Footer;

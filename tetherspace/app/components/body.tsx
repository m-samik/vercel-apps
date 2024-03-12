"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { faqs } from "../libs/constants";

const Body = () => {
  return (
    <div className="min-h-screen mx-2 md:mx-40 my-10">
      <div className="flex flex-row items-center pt-14">
        <div>
          <h1 className="text-[2rem] md:text-[4rem] font-bold">
            Maximize your profits with{" "}
            <span className="text-orange-400">tetherspace</span> trading
            strategies
          </h1>
          <img
            src="/assets/buysellsvg.svg"
            alt="photo"
            className="w-full block md:hidden py-4"
          />
          <h2 className="mt-10 text-white/80 font-bold">
            Discover the best P2P trading strategies for buying and selling
            Tether (USDT) on tetherspace.
          </h2>
          <button
            onClick={() => {}}
            className="bg-orange-400 py-2 px-4 rounded-md mt-4"
          >
            Contact Us
          </button>
          <div className="flex flex-row space-x-1 pt-4 items-center">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span className="pr-2">
              <FaStar />
            </span>
            {/*Vertical divider */}
            <div className="w-[1px] h-6 bg-white" />
            <h1 className="px-2">P2P Trading Strategies </h1>
            <div className="w-[1px] h-6 bg-white" />
            <h1 className="px-2">Maximize Profit</h1>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src="/assets/buysellsvg.svg" alt="photo" className="w-full" />
        </div>
      </div>
      <div className="md:pt-36 pt-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <img src="/assets/bitcoinwithgift.svg" alt="photo" />
          <img src="/assets/bitcoinwallet.svg" alt="photo" />
          <img src="/assets/moneyhand.svg" alt="photo" />
          <img src="/assets/money.svg" alt="photo" />
        </div>
      </div>
      <div className="pb-10 pt-20  md:pt-20 md:pb-20" id="services">
        <h1 className="text-2xl md:text-[3rem] font-bold text-center">
          Explore the best P2P trading strategies
        </h1>
        <h1 className="text-sm md:text-lg pt-4 md:pt-8 text-white/80 text-center">
          tetherspace provides you with the best P2P trading strategies to help
          you maximize your profits when buying and selling Tether (USDT). Our
          proven strategies will give you an edge in the crypto market.
        </h1>
      </div>
      <div>
        <img src="/assets/coins.jpg" alt="coins" className="w-full py-10" />
      </div>

      <div className="py-10 md:py-20">
        <h1 className="text-2xl md:text-[3rem] font-bold text-center">
          Learn from experienced traders
        </h1>
        <h1 className="text-sm md:text-lg pt-4 md:pt-8 text-white/80 text-center">
          Gain valuable insights from experienced traders on tetherspace Trader.
          Learn their successful P2P trading strategies and apply them to your
          own trading activities, increasing your chances of success.
        </h1>
      </div>
      <div>
        <img src="/assets/chart.jpg" alt="coins" className="w-full py-10" />
      </div>
      <div className="py-10 md:py-20">
        <h1 className="text-2xl md:text-[3rem] font-bold text-center">
          Stay updated with market trends
        </h1>
        <h1 className="text-sm md:text-lg pt-4 md:pt-8 text-white/80 text-center">
          tetherspace trader keeps you informed about the latest market trends
          and developments in the crypto industry. Stay ahead of the curve and
          make informed trading decisions based on real-time information.
        </h1>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <img src="/assets/mangraph.svg" alt="photo" />
          <img src="/assets/manhappy.svg" alt="photo" />
          <img src="/assets/mangraph2.svg" alt="photo" />
          <img src="/assets/mobilecoin.png" alt="photo" />
        </div>
      </div>
      <div id="faqs" className="py-20">
        <h1 className="text-[2rem] md:text-[4rem] text-center font-semibold">
          FAQs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#17181E] p-6 rounded-lg shadow-md">
              <h2 className="text-lg  font-semibold mb-2">{faq.question}</h2>
              <p className="text-white/60">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        id="contactus"
        className="flex space-y-8 md:space-y-0 flex-col md:flex-row items-center py-20"
      >
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <h1 className="text-[2rem] md:text-[4rem] font-semibold">
            Get a quote or set up a consultation
          </h1>
          <div>
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
              PHONE
            </h2>
            <h2 className="text-[1.5rem] md:text-[2rem]">(+91) 123 456 7890</h2>
          </div>
          <div>
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
              EMAIL
            </h2>
            <h2 className="text-[1.5rem] md:text-[2rem]">
              hello@tetherspace.com
            </h2>
          </div>
          <div>
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
              SOCIALS
            </h2>
            <div className="flex flex-row space-x-8 pt-4">
              <FaXTwitter size={22} />
              <FaFacebook size={22} />
              <FaInstagram size={22} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <img src="/assets/robot.png" alt="robot" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Body;

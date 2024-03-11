"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const Body = () => {
  return (
    <div className="min-h-screen mx-4 md:mx-40">
      <div>
        <h1 className="text-[3rem] md:text-[6rem] font-bold">
          Maximize your profits with{" "}
          <span className="text-orange-400">tetherspace</span> trading
          strategies
        </h1>
        <h2 className="mt-10 text-white/80 font-bold">
          Discover the best P2P trading strategies for buying and selling Tether
          (USDT) on tetherspace.
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
      <div>
        <img src="/assets/coins.jpg" alt="coins" className="w-full" />
      </div>
      <div className="p-10">
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
        <img src="/assets/chart.jpg" alt="coins" className="w-full" />
      </div>
      <div className="p-10">
        <h1 className="text-2xl md:text-[3rem] font-bold text-center">
          Learn from experienced traders
        </h1>
        <h1 className="text-sm md:text-lg pt-4 md:pt-8 text-white/80 text-center">
          Gain valuable insights from experienced traders on Tether Trader.
          Learn their successful P2P trading strategies and apply them to your
          own trading activities, increasing your chances of success.
        </h1>
      </div>
      <div>
        <img src="/assets/car.jpg" alt="coins" className="w-full" />
      </div>
      <div className="p-10">
        <h1 className="text-2xl md:text-[3rem] font-bold text-center">
          Stay updated with market trends
        </h1>
        <h1 className="text-sm md:text-lg pt-4 md:pt-8 text-white/80 text-center">
          Tether Trader keeps you informed about the latest market trends and
          developments in the crypto industry. Stay ahead of the curve and make
          informed trading decisions based on real-time information.
        </h1>
      </div>
    </div>
  );
};

export default Body;

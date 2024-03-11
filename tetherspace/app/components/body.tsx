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
    </div>
  );
};

export default Body;

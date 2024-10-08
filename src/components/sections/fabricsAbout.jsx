"use client";

import "./style.css";
const FabricsAbout = () => {
  return (
    <div className="fabric-container">
      <div className="fabric-img">
        <div className="fabric-text-wrap">
          <h2 className="text-xl font-bold">DISCOVER OUR FABRIC REMNANTS</h2>
          <p className="mt-4">
            Choose from an impressive range of fabric remnants available at
            affordable prices.
          </p>
          <button className="py-[15px] w-full mt-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            Shop Now
          </button>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0889/9651/2017/files/bg2.jpg?v=1724235885"
          alt=""
        />
      </div>
    </div>
  );
};

export default FabricsAbout;

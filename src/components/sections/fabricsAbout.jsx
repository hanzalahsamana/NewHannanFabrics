"use client";

import Link from "next/link";
import "./style.css";
import section1 from "@/assets/images/sectionImages/section1.webp";
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
          <Link href={'/products'} className="flex justify-center py-[15px] w-full mt-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            Shop Now
          </Link>
        </div>
        <img
          src={section1.src}
          alt="DISCOVER OUR FABRIC REMNANTS"
        />
      </div>
    </div>
  );
};

export default FabricsAbout;

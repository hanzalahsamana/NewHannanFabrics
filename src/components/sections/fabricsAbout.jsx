"use client";

import Link from "next/link";
import "./style.css";
import section1 from "@/assets/images/sectionImages/section1.webp";
import { selectPageByType } from "@/Redux/PagesContent/PagesContentSlice";
import { useSelector } from "react-redux";
const FabricsAbout = () => {

  const selectedPage = useSelector((state) =>
    selectPageByType(state, "Fabric Remants")
  );
  
  return (
    <div className="fabric-container">
      <div className="fabric-img">
        <div className="fabric-text-wrap">
          <h2 className="text-xl font-bold">{selectedPage?.title}</h2>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: selectedPage?.text }}>
          </div>
          <Link href={'/products'} className="flex justify-center py-[15px] w-full mt-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            {selectedPage?.buttonText}
          </Link>
        </div>
        <img
          src={selectedPage?.image}
          alt={selectedPage?.title}
        />
      </div>
    </div>
  );
};

export default FabricsAbout;

"use client";

import { useSelector } from "react-redux";
import "./style.css";
import { selectPageByType } from "@/Redux/PagesContent/PagesContentSlice";

const FabricsLiberary = () => {

  const selectedPage = useSelector((state) =>
    selectPageByType(state, "Manufacture Process")
  );
  return (
    <div className="fabric-cutting-container py-[10px]">
      <div className="fabric-img">
        <div className="fabric-text-wrap">
          <h2>{selectedPage?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedPage?.text }}>
          </div>
        </div>
        <img
          src={selectedPage?.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default FabricsLiberary;

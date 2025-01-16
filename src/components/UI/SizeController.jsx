import React from "react";

const SizeController = ({ size, setSize, availableSizes }) => {
  console.log(size , "kkkkk");
  
  return (
    <div className="size-controller">
      <div className="flex items-center gap-[5px]">
        <p>sizes: </p>
        {availableSizes.map((availableSize) => (
          <button
            key={availableSize}
            className={`px-[10px] h-[40px] flex justify-center items-center bg-[#e3e3e3] rounded-sm text-[15px] ${size === availableSize ? "border-2 border-black " : ""}`}
            onClick={() => setSize(availableSize)}
          >
            {availableSize} meters
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeController;

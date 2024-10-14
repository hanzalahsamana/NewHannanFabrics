"use client";

import { useState } from "react";
import style from "./style.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full flex justify-center py-16 px-[15px]">
      <div className="max-w-[700px] w-full">
        <div>
          <h1 className={`my-[10px] text-[40px] ${style.contactheading}`}>Reach Us</h1>
        </div>
        <form>
          <div className='flex flex-col gap-5'>
            <div className="flex w-[100%] gap-5 max-sm:flex-col">
              <div className={`relative w-[50%] max-sm:w-full ${style.InputCont}`}>
                <input
                  type="text"
                  name="input1"
                  value={formData.input1}
                  onChange={handleChange}
                  className={`pl-3 text-[16px] w-[100%] h-[50px] outline-none border-[1px] border-[#aaaaaa] hover:border-[2px] focus:border-[#252525] focus:border-[2px] ${style.Inputs}`}
                />
                <label
                  className={`transition-all absolute left-3 text-[#4e4e4e] ${
                    formData.input1 ? "top-[5px] text-[10px]" : "top-4"
                  }`}
                >
                  Name
                </label>
              </div>
              {/* Input 2 */}
              <div className={`relative w-[50%] max-sm:w-full ${style.InputCont}`}>
                <input
                  type="text"
                  name="input2"
                  value={formData.input2}
                  onChange={handleChange}
                  className={`pl-3 text-[16px] w-[100%] h-[50px] outline-none border-[1px] border-[#aaaaaa] hover:border-[2px] focus:border-[#252525] focus:border-[2px] ${style.Inputs}`}
                />
                <label
                  className={`transition-all absolute left-3 text-[#4e4e4e] ${
                    formData.input2 ? "top-[5px] text-[10px]" : "top-4"
                  }`}
                >
                  Name
                </label>
              </div>
            </div>
            <div className={`relative w-full ${style.InputCont}`}>
              <input
                type="text"
                name="input3"
                value={formData.input3}
                onChange={handleChange}
                className={`pl-3 text-[16px] w-[100%] h-[50px] outline-none border-[1px] border-[#aaaaaa] hover:border-[2px] focus:border-[#252525] focus:border-[2px] ${style.Inputs}`}
              />
              <label
                className={`transition-all absolute left-3 text-[#4e4e4e] ${
                  formData.input3 ? "top-[5px] text-[10px]" : "top-4"
                }`}
              >
                Name
              </label>
            </div>
            {/* Input 4 */}
            <div className={`relative w-full ${style.InputCont}`}>
              <textarea
                type="text-area"
                name="input4"
                value={formData.input4}
                onChange={handleChange}
                className={`pl-3 resize-none pt-[20px] text-[16px] w-[100%] h-[120px] outline-none border-[1px] border-[#aaaaaa] hover:border-[2px] focus:border-[#252525] focus:border-[2px] ${style.Inputs}`}
              ></textarea>
              <label
                className={`transition-all absolute left-3 text-[#4e4e4e] ${
                  formData.input4 ? "top-[5px] text-[10px]" : "top-4"
                }`}
              >
                Name
              </label>
            </div>
          </div>
          <button className="py-[15px] w-full mt-3 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

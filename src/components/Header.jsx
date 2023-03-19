import React from "react";
import Rahul_Gupta_Resume from "../assets/resume.pdf";

const Header = () => {
  return (
    <div className="h-[60px] w-[99vw] px-[120px] py-[10px] bg-white shadow-sm flex justify-between items-center fixed">
      <h1
        title="Rahul Gupta"
        className="text-[#4831D4] text-3xl italic font-medium cursor-pointer w-[125px]"
      >
        {"<rahul />"}
      </h1>
      <div className="flex gap-3">
        <button className="bg-[white] h-[40px] w-[140px] rounded-md text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259]">
          Contact Me
        </button>
        <button className="bg-[#1C1259] h-[40px] w-[140px] rounded-md text-white hover:bg-white hover:text-[#1C1259] hover:border hover:border-[#1C1259]">
          <a download href={Rahul_Gupta_Resume}>
            Resume (32KB)
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="h-[60px] px-[120px] py-[10px] shadow-md flex justify-between items-center z-10">
      <h1 className="text-[#4831D4] text-3xl italic font-medium w-[125px]">
        {"<rahul />"}
      </h1>
      <button className="bg-[#1C1259] h-[40px] w-[140px] rounded-md text-white">
        Contact Me
      </button>
    </div>
  );
};

export default Header;

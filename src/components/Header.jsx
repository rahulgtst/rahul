import React from "react";

const Header = () => {
  return (
    <header className="h-[60px] w-[99vw] px-[120px] py-[10px] bg-white shadow-sm flex justify-between items-center fixed">
      <h1
        title="Rahul Gupta"
        className="text-[#4831D4] text-3xl italic font-medium cursor-pointer w-[125px]"
      >
        {"<rahul />"}
      </h1>
    </header>
  );
};

export default Header;

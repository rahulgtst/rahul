import React from "react";
import Tailwind from "../assets/toolIcons/tailwindcss.png";
import ReactJs from "../assets/toolIcons/reactjs.png";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="h-[400px] bg-white border-t-2 flex flex-col justify-center items-center gap-8">
      <Logo />
      <h2 className="sm:text-[18px]">Learning & Building one at a time</h2>
      <ul className="flex gap-3">
        <li className="text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259] p-2 rounded-2xl">
          Home
        </li>
        <li className="text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259] p-2 rounded-2xl">
          About
        </li>
        <li className="text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259] p-2 rounded-2xl">
          Tools
        </li>
        <li className="text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259] p-2 rounded-2xl">
          Projects
        </li>
      </ul>
      <h3 className="text-[13px] sm:text-[14px]">Made by Rahul Gupta © 2023</h3>
      <h4 className="text-[12px] flex items-center">
        Made with
        <img src={ReactJs} alt="tailwind" className="h-[40px] inline ml-1" />
        <a href="https://react.dev/" className="text-[16px] sm:text-[20px]">
          React &
        </a>
        <img src={Tailwind} alt="tailwind" className="h-[40px] inline ml-1" />
        <a
          href="https://tailwindcss.com/"
          className="text-[16px] sm:text-[20px]"
        >
          Tailwind
        </a>
      </h4>
    </div>
  );
};

export default Footer;

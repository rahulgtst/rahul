import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import GitHub from "../assets/github.png";

const SideBar = () => {
  return (
    <ul className="fixed top-[200px] left-4 sm:left-[40px] md:left-[80px] flex flex-col justify-center items-center gap-3 z-10 border-2 p-1 rounded-3xl">
      <li>
        <a href="https://www.linkedin.com/in/rhlgt/" target="_blank">
          <img
            src={LinkedIn}
            alt="linkedin"
            className="h-[35px] sm:h-[40px] md:h-[45px]"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/rahulgtst" target="_blank">
          <img
            src={GitHub}
            alt="gitHub"
            className="h-[35px] sm:h-[40px] md:h-[45px]"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/rahulgtst" target="_blank">
          <img
            src={Twitter}
            alt="twitter"
            className="h-[35px] sm:h-[40px] md:h-[45px]"
          />
        </a>
      </li>
    </ul>
  );
};

export default SideBar;

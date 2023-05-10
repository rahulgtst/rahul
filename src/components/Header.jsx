import React, { useState } from "react";
import menu from "../assets/menu.png";
import Logo from "./Logo";
import { Link } from "react-scroll";

const Header = () => {
  const [navigationOn, setNavigationOn] = useState(false);

  const handleNavigationVisibility = (e) => {
    e.stopPropagation();
    setNavigationOn(!navigationOn);
  };

  return (
    <header className="h-[60px] w-full lg:w-[99vw] px-5 sm:px-[40px] lg:px-[120px] py-[10px] bg-white border border-b-2 flex justify-between items-center fixed">
      <Logo />

      <nav className="hidden md:block">
        <ul className="flex gap-5 text-[14px] bg-white">
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="Tools"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Tools
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        id="Navigation"
        className={`md:hidden ${navigationOn ? "block" : "hidden"}`}
      >
        <ul className="border fixed top-[60px] right-5 w-[100px] h-[220px] flex flex-col gap-5 text-[14px] bg-white">
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="Tools"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Tools
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      <img
        src={menu}
        alt="menu"
        id="Menu"
        onClick={handleNavigationVisibility}
        className="h-[30px] md:hidden"
      />
    </header>
  );
};

export default Header;

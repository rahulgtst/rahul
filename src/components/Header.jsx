import React, { useState, useEffect } from "react";
import menu from "../assets/menu.png";
import Logo from "./Logo";
import { Link } from "react-scroll";

const Header = () => {
  const [navigationOn, setNavigationOn] = useState(false);
  const handleNavigationVisibility = (e) => {
    e.stopPropagation();
    navigationOn ? setNavigationOn(false) : setNavigationOn(true);
    console.log(navigationOn);
  };
  useEffect(() => {
    const Navigation = document.getElementById("Navigation");
    Navigation.style.display = navigationOn ? "block" : "none";
  }, [navigationOn]);
  return (
    <header className="h-[60px] w-full lg:w-[99vw] px-5 sm:px-[40px] lg:px-[120px] py-[10px] bg-white border border-b-2 flex justify-between items-center fixed">
      <Logo />
      <ul
        id="Navigation"
        className="border fixed top-[60px] right-0 w-[100px] h-[150px] md:static md:top-0 flex md:gap-5 text-[14px] bg-white"
      >
        <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-2 rounded-lg hover:text-[#4831D4] hover:cursor-pointer">
          <Link to="Tools" spy={true} smooth={true} offset={50} duration={500}>
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

import React from "react";
import Image from "../assets/rahul-profile.png";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-[200px] h-[400px] bg-[#4831D4]">
      <Profile img={Image} size={200} />
      <div className="info flex flex-col justify-center items-center italic text-[#fff]">
        <h1 className="text-[48px]">
          Hi, I'm <span className="font-bold">Rahul Gupta</span>
        </h1>
        <h3 className="text-[24px]">A Front End Developer</h3>
        <p className="w-[500px] text-[14px] text-center mt-4">
          "Code enthusiast ❤️ crafting beautiful user experiences, Passionate
          programmer 💻 solving real-world problems."
        </p>
      </div>
    </div>
  );
};

export default Hero;

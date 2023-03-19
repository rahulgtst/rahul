import React from "react";
import Image from "../assets/rahul-profile.png";
import Background from "../assets/background.png";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="hero flex justify-between items-center px-[200px] h-[650px] ">
      <Profile img={Image} />
      <div className="info flex flex-col justify-center items-center italic bg-[white]">
        <h1 className="text-[48px]">
          Hi, I'm <span className="font-bold">Rahul Gupta</span>
        </h1>
        <h3 className="text-[24px]">A Front End Developer</h3>
        <q className="w-[500px] text-[14px] text-center mt-4">
          Code enthusiast ❤️ crafting beautiful user experiences, Passionate
          programmer 💻 solving real-world problems.
        </q>
      </div>
    </div>
  );
};

export default Hero;

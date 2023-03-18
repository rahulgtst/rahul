import React from "react";
import Illustration from "../assets/illustration.png";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-[200px] h-[400px]">
      <div className="info flex flex-col justify-center items-center italic">
        <h1 className="underline">About Me</h1>
        <p className="w-[500px] text-[14px] text-center mt-4"></p>
      </div>
      <Profile img={Illustration} size={400} />
    </div>
  );
};

export default Hero;

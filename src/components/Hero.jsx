import React from "react";
import img from "../assets/rahul-profile.png";
import Image from "./Image";

const Hero = () => {
  return (
    <div className="hero flex justify-between items-center px-[200px] h-[650px] ">
      <Image img={img} title="Rahul Gupta" />
      <div className="info flex flex-col justify-center items-center italic bg-[white]">
        <h1 className="text-[48px]">
          Hi, I'm{" "}
          <span className=" decoration-wavy decoration-yellow-300 decoration-from-font font-bold">
            Rahul Gupta
          </span>
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

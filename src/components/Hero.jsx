import React from "react";
import img from "../assets/rahul-profile.png";
import Rahul_Gupta_Resume from "../assets/resume.pdf";
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
        <div className="flex gap-3 mt-6">
          <button className="bg-[white] h-[40px] w-[140px] rounded-md text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259]">
            Contact Me
          </button>
          <button className="bg-[#1C1259] h-[40px] w-[140px] rounded-md text-white hover:bg-white hover:text-[#1C1259] hover:border hover:border-[#1C1259]">
            <a download href={Rahul_Gupta_Resume}>
              Resume (32KB)
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

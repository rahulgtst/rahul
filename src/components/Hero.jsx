import React from "react";
import img from "../assets/rahul-profile.png";

import Image from "./Image";

const Hero = ({ onChangeContactStatus }) => {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row justify-center items-center lg:gap-40 gap-10 h-[700px] md:h-[650px] "
    >
      <Image img={img} title="Rahul Gupta" />
      <div className="info flex flex-col justify-center items-center italic bg-[white]">
        <h2 className="text-[30px] md:text-[48px]">
          Hi, I'm{" "}
          <span className="different-text text-[#4831D4] decoration-wavy decoration-yellow-300 decoration-from-font font-bold">
            Rahul Gupta
          </span>
        </h2>
        <h3 className="different-text text-[24px]">Full Stack Developer</h3>
        <q className="w-[300px] sm:w-[400px] md:w-[300px] lg:w-[400px] text-[14px] text-center text-slate-600 mt-4">
          Code enthusiast ❤️ crafting beautiful user experiences, Passionate
          programmer 💻 solving real-world problems.
        </q>
        <div className="flex gap-3 mt-6 text-[14px] items-center">
          Want to Hire
          <button
            onClick={onChangeContactStatus}
            className="bg-[white] h-[40px] w-[100px] md:w-[140px] rounded-md text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259]"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import github from "../assets/github.png";
import play from "../assets/play.png";
import { motion } from "framer-motion";
import img from "../assets/projectImages/Todo-app.png";

const Project = ({ data }) => {
  console.log(data.image);
  return (
    <motion.div className="h-[300px] w-[300px] py-4 rounded-lg shadow-lg bg-white">
      <img
        src={data.image}
        alt={data.name}
        className="h-[190px] w-[300px] rounded-t-lg"
      />
      <div className="flex justify-between px-4">
        <div className="py-2">
          <h3 className="text-[20px] font-semibold">{data.name}</h3>
          <p className="text-[15px]">Tech Stack</p>
          <p className="text-[13px]">{data.tools.join(", ")}</p>
        </div>
        <div className="flex py-3 gap-x-3">
          <a href={data.githubLink}>
            <img src={github} alt="GitHub" className="h-[45px]" />
          </a>
          <a href={data.websiteLink}>
            <img src={play} alt="Play" className="h-[48px]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

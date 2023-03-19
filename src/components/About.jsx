import React from "react";
import Illustration from "../assets/illustration.png";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-[200px] h-[500px]">
      <div className="info flex flex-col justify-center items-center italic">
        <h1 className="underline text-[20px] font-bold">About Me</h1>
        <p className="w-[500px] text-[14px] text-center mt-4 bg-white">
          I am Rahul, a <strong>Front end Developer</strong> based in Delhi,
          India. I am currently pursuing my <strong>B-Tech</strong> at
          <strong> Delhi Technological University</strong>. I do programming in
          <strong> C++</strong> and <strong> Python</strong>. I know the basics
          of front-end web development and am proficient in{" "}
          <strong>HTML/CSS/JS</strong>. Learning and Building Projects using{" "}
          <strong>React</strong> and <strong>Tailwind CSS</strong>.Writing blogs
          on <strong>dev.to and Hashnode</strong> . I am interested in reading
          books and anime.
        </p>
      </div>
      <img src={Illustration} alt="Illustration" className="h-[450px]" />
    </div>
  );
};

export default Hero;

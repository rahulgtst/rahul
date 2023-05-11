import React from "react";
import Illustration from "../assets/illustration.png";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col md:flex-row justify-center items-center gap-5 sm:h-[600px] md:h-[400px]"
    >
      <div className="info flex flex-col justify-center items-center italic bg-white">
        <h1 className="text-[24px] font-bold text-[#4831D4]">{"<about />"}</h1>
        <p className="w-[300px] sm:w-[400px] md:w-[300px] lg:w-[500px] text-center text-[14px] mt-4 bg-white">
          I am Rahul, a <strong>Full Stack Developer</strong> based in Delhi,
          India. I am currently pursuing my <strong>B-Tech</strong> at
          <strong> Delhi Technological University</strong>. I do code in
          <strong> C++</strong> and <strong> Python</strong>. I know the basics
          of front-end web development and am fluent in <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, and <strong>JavaScript</strong>. Learning and
          Building Projects using <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>. Solve programming problem on{" "}
          <strong>
            <a href="https://leetcode.com/rahulgtst/">Leetcode</a>
          </strong>{" "}
          and dev challenges on{" "}
          <strong>
            <a href="https://www.frontendmentor.io/profile/rahul8858">
              Frontend Mentor
            </a>
          </strong>
          . Writing blogs on{" "}
          <strong>
            <a href="https://rahulgtst.hashnode.dev/">Hashnode</a>
          </strong>{" "}
          and . I am interested in reading books and anime.
        </p>
      </div>
      <img
        src={Illustration}
        alt="Illustration"
        className="h-[300px] sm:h-[375px] lg:h-[450px]"
      />
    </section>
  );
};

export default About;

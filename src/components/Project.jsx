import React from "react";
import ticTacToe from "../assets/projectImages/Tic-tac-toe.jpg";
import github from "../assets/github.png";
import play from "../assets/play.png";

const Project = () => {
  return (
    <div className="h-[300px] w-[340px] px-4 py-4 rounded-lg shadow-lg bg-white">
      <img src={ticTacToe} alt="Project" className="h-[190px] rounded-lg" />
      <div className="flex justify-between">
        <div className="py-2">
          <h3 className="text-[20px] font-semibold">Tic-Tac-Toe</h3>
          <p className="text-[15px]">Tech Stack</p>
          <p className="text-[13px]">HTML, CSS, JavaScript</p>
        </div>
        <div className="flex py-3 gap-x-3">
          <a href="#">
            <img src={github} alt="GitHub" className="h-[48px]" />
          </a>
          <a href="#">
            <img src={play} alt="Play" className="h-[48px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

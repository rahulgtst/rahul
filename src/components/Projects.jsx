import React, { useId } from "react";
import Project from "./Project";
import projectData from "../data/projectData";

const Projects = () => {
  return (
    <section
      id="Project"
      className="h-[800px] md:h-[500px] w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-[24px] font-bold text-[#4831D4] italic mb-5 bg-white">
        {"<projects />"}
      </h1>
      <section className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center md:w-[980px]">
        {projectData.map((data) => (
          <Project key={useId()} data={data} />
        ))}
      </section>
    </section>
  );
};

export default Projects;

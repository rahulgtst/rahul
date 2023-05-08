import React from "react";
import Tool from "./Tool";
import toolData from "../../data/toolData";

const Tools = () => {
  const tools = toolData.map((data) => (
    <Tool
      key={data.key}
      source={data.source}
      name={data.name}
      colorCode={data.colorCode}
    />
  ));
  return (
    <section
      id="Tools"
      className="flex flex-col justify-center py-10 items-center gap-5 h-[700px] sm:h-[500px] md:h-[400px]"
    >
      <h1 className="text-[24px] font-bold text-[#4831D4] italic mb-5 bg-white">
        {"<tools />"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-y-5 md:gap-y-4 w-[200px]  sm:w-[400px] md:w-[600px]">
        {tools}
      </div>
    </section>
  );
};

export default Tools;

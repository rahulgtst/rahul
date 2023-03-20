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
    <section className="flex flex-col justify-center items-center h-[400px]">
      <h1 className="text-[24px] font-bold text-[#4831D4] italic mb-5 bg-white">
        {"<tools />"}
      </h1>
      <div className="grid grid-cols-5 gap-y-4 w-[600px]">{tools}</div>
    </section>
  );
};

export default Tools;

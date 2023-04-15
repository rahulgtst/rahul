import React from "react";

const Tool = ({ source, name, colorCode }) => {
  return (
    <div
      title={name}
      style={{ backgroundColor: colorCode }}
      className="w-[90px] h-[90px] rounded-lg flex items-center justify-center"
    >
      <img src={source} alt={name} className="h-[70px] w-auto" />
    </div>
  );
};

export default Tool;

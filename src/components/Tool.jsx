import React from "react";

const Tool = ({ source, name, colorCode }) => {
  return (
    <div
      title={name}
      style={{ backgroundColor: colorCode }}
      className="p-3 w-[72px] rounded-lg"
    >
      <img src={source} alt={name} className="h-[70px] w-[70px]" />
    </div>
  );
};

export default Tool;

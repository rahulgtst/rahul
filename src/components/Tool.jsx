import React from "react";

const Tool = ({ source, name, colorCode }) => {
  return (
    <div
      title={name}
      style={{ backgroundColor: colorCode }}
      className="p-3 w-[72px] rounded-lg"
    >
      <img src={source} alt={name} className="h-[72px] w-auto" />
    </div>
  );
};

export default Tool;

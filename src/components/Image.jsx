import React from "react";

const Image = ({ img, title }) => {
  return (
    <div className="profile" title={title}>
      <img
        src={img}
        alt="Profile Photo"
        className="cursor-pointer rounded-lg h-[300px]"
      />
    </div>
  );
};

export default Image;

import React from "react";

const Profile = ({ img }) => {
  return (
    <div className="profile">
      <img
        src={img}
        alt="Profile Photo"
        className="cursor-pointer rounded-lg h-[300px]"
      />
    </div>
  );
};

export default Profile;

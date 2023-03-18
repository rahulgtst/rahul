import React from "react";

const Profile = ({ img, size }) => {
  return (
    <div className="profile">
      <img
        src={img}
        alt="Profile Photo"
        className="profilePhoto rounded-lg h-[300px]"
      />
    </div>
  );
};

export default Profile;

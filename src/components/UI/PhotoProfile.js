import React from "react";

// Assets
import PhotoImage from "../../assets/photo_profile.png";

const PhotoProfile = (props) => {
  return (
    <img
      src={PhotoImage}
      alt="user"
      width="90"
      height="90"
      className={`rounded-full object-cover ${props.className}`}
    />
  );
};

export default PhotoProfile;

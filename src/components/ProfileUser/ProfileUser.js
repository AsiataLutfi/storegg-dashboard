import React from "react";

// Components
import PhotoProfile from "../UI/PhotoProfile";

const ProfileUser = (props) => {
  return (
    <div className="text-center">
      <PhotoProfile className="mx-auto" />
      <div className="mt-5 flex flex-col">
        <h5 className="mb-1 text-xl font-bold text-downriver-primary">
          {props.name}
        </h5>
        <p className="text-downriver-secondary">{props.email}</p>
      </div>
    </div>
  );
};

export default ProfileUser;

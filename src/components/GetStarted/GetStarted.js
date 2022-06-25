import React from "react";

// Assets
import GetStartedImg from "../../assets/top_up_&_be_the_winner.svg";

const GetStarted = () => {
  return (
    <div className="p-5">
      <div className="mb-5 flex">
        <img
          src={GetStartedImg}
          alt="Get Started"
          className="mr-4 h-12.5 w-12.5"
        />
        <p className="font-medium text-downriver-primary">
          Top Up & Be The Winner
        </p>
      </div>
      <button
        type="button"
        className="w-full rounded-full bg-indigo-700 py-2 text-xs font-medium text-white"
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;

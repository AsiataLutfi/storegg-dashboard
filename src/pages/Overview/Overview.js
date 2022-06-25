import React from "react";

// Categories
import TopUpCategories from "./TopUpCategories/TopUpCategories";
import LatestTransaction from "./LatestTransaction/LatestTransaction";

const Overview = () => {
  return (
    <React.Fragment>
      <h1 className="mb-12.5 text-3xl font-bold text-downriver-primary">
        Overview
      </h1>
      <TopUpCategories />
      <LatestTransaction />
    </React.Fragment>
  );
};

export default Overview;

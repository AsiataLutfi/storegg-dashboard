import React from "react";
import thousandSeparator from "../../../helpers/thousand-separator";

// Function

const Category = (props) => {
  const spentFormat = thousandSeparator(props.spent);

  return (
    <div className="mr-7.5 p-7.5">
      <div className="mb-6 flex w-4/5 items-center">
        <img src={props.image} alt={props.title} className="mr-3 h-15 w-15" />
        <p className="text-downriver-primary">{props.title}</p>
      </div>
      <p className="text-sm text-downriver-secondary">Total Spent</p>
      <p className="text-xl font-medium text-downriver-primary">
        Rp {spentFormat}
      </p>
    </div>
  );
};

export default Category;

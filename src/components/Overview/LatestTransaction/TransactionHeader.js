import React from "react";

const TransactionHeader = (props) => {
  return (
    <div className="flex items-center">
      <img
        src={props.thumbnail}
        alt={props.name}
        className="mr-4 h-15 w-20 rounded-2xl"
      />
      <div className="flex flex-col">
        <p className="mb-1 font-medium text-downriver-primary line-clamp-1">
          {props.name}
        </p>
        <p className="text-xs text-downriver-secondary">{props.category}</p>
      </div>
    </div>
  );
};

export default TransactionHeader;

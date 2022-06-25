import React from "react";

const TransactaionStatus = (props) => {
  let bgBadge;
  if (props.status === "pending") {
    bgBadge = "bg-yellow-500";
  }

  if (props.status === "failed") {
    bgBadge = "bg-red-600";
  }

  if (props.status === "success") {
    bgBadge = "bg-green-600";
  }

  return (
    <p className="flex items-center justify-center capitalize">
      <span className={`badge ${bgBadge}`}></span>
      {props.status}
    </p>
  );
};

export default TransactaionStatus;

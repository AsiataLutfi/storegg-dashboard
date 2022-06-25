import React from "react";

// Components
import TransactionHeader from "./TransactionHeader";

// Function
import thousandSeparator from "../../../helpers/thousand-separator";
import TransactaionStatus from "./TransactaionStatus";

const Transaction = (props) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-downriver-primary">
          <th className="pb-5 text-start font-normal">Game</th>
          <th className="px-15 pb-5 font-normal">Item</th>
          <th className="px-15 pb-5 font-normal">Price</th>
          <th className="px-15 pb-5 font-normal">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.datas.map((data) => (
          <tr
            key={data.id}
            className="rounded-xl duration-300 hover:bg-blue-50"
          >
            <td className="py-2">
              <TransactionHeader
                thumbnail={data.img}
                name={data.name}
                category={data.category}
              />
            </td>
            <td className="text-center font-medium text-downriver-primary">
              <p>{data.item}</p>
            </td>
            <td className="text-center font-medium text-downriver-primary">
              <p>Rp {thousandSeparator(data.price)}</p>
            </td>
            <td className="text-center font-medium text-downriver-primary">
              <TransactaionStatus status={data.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transaction;

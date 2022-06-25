import React from "react";

// Components
import Transaction from "./Transaction";

// Assets
import CODThumb from "../../../assets/call_of_duty.png";
import COCThumb from "../../../assets/clash_of_clans.png";
import mobileLegendThumb from "../../../assets/mobile_legend.png";
import PUBGThumb from "../../../assets/pubg.png";

const DUMMY_TRANSACTIONS = [
  {
    id: "WiKePytORuveyPoHtOQ",
    name: "Call of Duty",
    category: "Desktop",
    item: "200",
    price: "290000",
    status: "pending",
    img: CODThumb,
  },
  {
    id: "kyETjbaeIWPbBTjgfCb",
    name: "Clash of Clans",
    category: "Mobile",
    item: "550",
    price: "740000",
    status: "success",
    img: COCThumb,
  },
  {
    id: "eJRImUCOJcraiEWL",
    name: "Mobile Legend",
    category: "Mobile",
    item: "100",
    price: "120000",
    status: "failed",
    img: mobileLegendThumb,
  },
  {
    id: "iZvOOIZxSI",
    name: "Player Unknown Battleground",
    category: "Desktop",
    item: "225",
    price: "200000",
    status: "pending",
    img: PUBGThumb,
  },
];

const LatestTransaction = () => {
  return (
    <React.Fragment>
      <h2 className="mb-4 text-xl font-medium text-downriver-primary">
        Latest Transactions
      </h2>
      <div className="px-7.5 py-5">
        <Transaction datas={DUMMY_TRANSACTIONS} />
      </div>
    </React.Fragment>
  );
};

export default LatestTransaction;

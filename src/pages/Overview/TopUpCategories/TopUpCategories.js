import React from "react";
import Category from "./Category";

import GameDesktopImg from "../../../assets/game_desktop.svg";
import GameMobileImg from "../../../assets/game_mobile.svg";

const DUMMY_CATEGORIES = [
  {
    id: "hrVQbFpiS",
    title: "Game Desktop",
    spent: "18000500",
    image: GameDesktopImg,
  },
  {
    id: "kOYufQANM",
    title: "Game Mobile",
    spent: "8455000",
    image: GameMobileImg,
  },
  {
    id: "akDlMiQhdBiZGJWL",
    title: "Other Category",
    spent: "5000000",
    image: GameDesktopImg,
  },
];

const TopUpCategories = () => {
  return (
    <React.Fragment>
      <h2 className="mb-4 text-xl font-medium text-downriver-primary">
        Top Up Categories
      </h2>
      <div className="mb-7.5 flex">
        {DUMMY_CATEGORIES.map((category) => (
          <Category
            key={category.id}
            image={category.image}
            title={category.title}
            spent={category.spent}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TopUpCategories;

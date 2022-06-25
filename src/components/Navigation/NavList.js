import React from "react";

// Components
import NavLink from "./NavLink";

// Assets
import {
  BadgeCheckIcon,
  ChatAltIcon,
  CogIcon,
  CreditCardIcon,
  LogoutIcon,
  ShoppingBagIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const NavList = () => {
  return (
    <nav className="mt-12.5">
      <ul>
        <li className="mb-7.5">
          <NavLink link="/">
            <ViewGridIcon className="mr-4 h-6 w-6" />
            Overview
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <ShoppingBagIcon className="mr-4 h-6 w-6" />
            Transactions
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <ChatAltIcon className="mr-4 h-6 w-6" />
            Messages
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <CreditCardIcon className="mr-4 h-6 w-6" />
            Card
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <BadgeCheckIcon className="mr-4 h-6 w-6" />
            Rewards
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <CogIcon className="mr-4 h-6 w-6" />
            Settings
          </NavLink>
        </li>
        <li className="mb-7.5">
          <NavLink link="/">
            <LogoutIcon className="mr-4 h-6 w-6" />
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

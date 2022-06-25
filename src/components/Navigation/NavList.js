import React from "react";

// Components
import NavLinkComponent from "./NavLinkComponent";

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
          <NavLinkComponent link="overview">
            <ViewGridIcon className="mr-4 h-6 w-6" />
            Overview
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="transactions">
            <ShoppingBagIcon className="mr-4 h-6 w-6" />
            Transactions
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="messages">
            <ChatAltIcon className="mr-4 h-6 w-6" />
            Messages
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="card">
            <CreditCardIcon className="mr-4 h-6 w-6" />
            Card
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="rewards">
            <BadgeCheckIcon className="mr-4 h-6 w-6" />
            Rewards
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="settings">
            <CogIcon className="mr-4 h-6 w-6" />
            Settings
          </NavLinkComponent>
        </li>
        <li className="mb-7.5">
          <NavLinkComponent link="logout">
            <LogoutIcon className="mr-4 h-6 w-6" />
            Log Out
          </NavLinkComponent>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

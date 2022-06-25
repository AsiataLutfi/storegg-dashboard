import React from "react";

// Routes
import { NavLink } from "react-router-dom";

const NavLinkComponent = (props) => {
  let classes = "flex items-center text-lg transition-colors duration-300";

  const className =
    classes + " text-downriver-secondary hover:text-downriver-primary";

  const activeClassName =
    classes +
    " text-downriver-primary font-medium border-r-4 border-downriver-primary";

  return (
    <NavLink
      to={props.link}
      className={({ isActive }) => (isActive ? activeClassName : className)}
    >
      {props.children}
    </NavLink>
  );
};

export default NavLinkComponent;

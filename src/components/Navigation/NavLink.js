import React from "react";

const NavLink = (props) => {
  return (
    <a
      href={props.link}
      className="flex items-center text-lg text-downriver-secondary transition-colors duration-300 hover:text-downriver-primary"
    >
      {props.children}
    </a>
  );
};

export default NavLink;

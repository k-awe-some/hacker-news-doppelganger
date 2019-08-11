import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-bar.styles.scss";

const activeStyle = {
  color: "#FF6600"
};

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-posts">
      <li>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Top
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/new" activeStyle={activeStyle}>
          New
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/best" activeStyle={activeStyle}>
          Best
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;

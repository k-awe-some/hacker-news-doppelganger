import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Top
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/new">
          New
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/best">
          Best
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;

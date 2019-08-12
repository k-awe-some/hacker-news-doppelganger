import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

import "./nav-bar.styles.scss";
import { ThemeConsumer } from "../../utils/contexts/theme";

const activeStyle = {
  color: "#FF6600"
};

const NavBar = () => (
  <ThemeConsumer>
    {({ theme, toggleTheme }) => (
      <nav className="nav-bar">
        <ul className="nav-bar-posts">
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
        <button className="nav-bar-theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? (
            <FaLightbulb size={30} color="#1C2022" />
          ) : (
            <FaRegLightbulb size={30} color="#CBCBCB" />
          )}
        </button>
      </nav>
    )}
  </ThemeConsumer>
);

export default NavBar;

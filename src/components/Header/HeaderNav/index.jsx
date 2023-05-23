import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// HEADER IMAGE
import logo from "../../../assets/image/logo.png";
import search from "../../../assets/image/search.png";
import savat from "../../../assets/image/savat.png";
import user from "../../../assets/image/user.png";
import menu from "../../../assets/image/menu.png";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="content p-20">
          <a href="/" className="logo">
            <img src={logo} alt="img" />
          </a>
          <nav className="header-nav__nav">
            <div className="header-nav__nav-link">
              <img src={search} alt="img" />
            </div>
            <Link to="/about" className="header-nav__nav-link">
              <img src={savat} alt="img" />
            </Link>
            <Link to="/contact" className="header-nav__nav-link">
              <img src={user} alt="img" />
            </Link>
          </nav>
          <button className="burger-menu">
            <img src={menu} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
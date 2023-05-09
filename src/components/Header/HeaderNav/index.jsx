import React from "react";
import "./style.css";
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
              <img  src={search} alt="img" />
            </div>
            <a href="http://localhost:3000/about" className="header-nav__nav-link">
              <img src={savat} alt="img" />
            </a>
            <a href="http://localhost:3000/contact" className="header-nav__nav-link">
              <img src={user} alt="img" />
            </a>
          </nav>
          <button className="burger-menu">
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;

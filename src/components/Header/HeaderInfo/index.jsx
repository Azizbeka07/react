import React from "react";
import "./style.css";
import naushnik from "../../../assets/image/naushnik.png";

const HeaderInfo = () => {
  return (
    <div className="header-info">
      <div className="container">
        <div className="content">
          <img src={naushnik} alt="" className="Header-info__img p-20" />
          <div className="header-info__right">
            <p className="header-info__text">Hear it. Feel it</p>
            <h1 className="header-info__title">Move with the music</h1>
            <p className="header-info__price">$ 435 <span className="header-info__span">$ 465</span></p>
            <button className="header-info__btn">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;

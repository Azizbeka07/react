import React from "react";
import Title from "../Title";
import "./style.css";

// BOXINFO IMG
import yellow from "../../assets/image/yellow2.png";
import arrow from "../../assets/image/arrow.png";

const BoxInfo = () => {
  return (
    <section>
      <div className="container">
        <div className="content">
          <img src={yellow} alt="img" />
          <div className="content-right">
            <Title test={"Whatever you get in the box"} />
            <div className="content-right__arrow">
              <img src={arrow} alt="img" />
              <p className="arrow-text">5A Charger</p>
            </div>
            <div className="content-right__arrow">
              <img src={arrow} alt="img" />
              <p className="arrow-text">Extra battery</p>
            </div>
            <div className="content-right__arrow">
              <img src={arrow} alt="img" />
              <p className="arrow-text">Sophisticated bag</p>
            </div>
            <div className="content-right__arrowBox">
              <img src={arrow} alt="img" />
              <p className="arrow-text">User manual guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxInfo;

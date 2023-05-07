import React from "react";
import "./style.css";
import Title from "../Title";
// LATEST IMG
import blue2 from "../../assets/image/blue2.png";
import green from "../../assets/image/green.png";
import pink from "../../assets/image/pink.png";
import shop from "../../assets/image/shop.png";
import star from "../../assets/image/star.png";

const LatestProduction = () => {
  return (
    <section className="latest-section">
      <div className="container">
        <Title test={"Our Latest Product"} />
        <p className="latest-wrapper__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          facilisis nunc ipsum aliquam, ante.{" "}
        </p>
        <div className="latest-wrapper">
          <div className="card-item">
            <div className="card">
              <img src={pink} alt="img" className="card-img" />
              <div className="card-shop">
                <img src={shop} alt="img" />
              </div>
            </div>
              <div className="card-star">
                <img src={star} alt="img" />
                <p className="card-star__text">4.50</p>
              </div>
              <div className="card-bottom">
                <p className="card-bottom__text">Read Headphone</p>
                <p className="card-bottom__price">$ 256</p>
              </div>
          </div>
          <div className="card-item ">
            <div className="card card-blue">
              <img src={blue2} alt="img" className="card-img" />
              <div className="card-shop blue-shop">
                <img src={shop} alt="img" />
              </div>
            </div>
              <div className="card-star">
                <img src={star} alt="img" />
                <p className="card-star__text">4.50</p>
              </div>
              <div className="card-bottom">
                <p className="card-bottom__text">Blue Headphone</p>
                <p className="card-bottom__price">$ 235</p>
              </div>
          </div>
          <div className="card-item ">
            <div className="card card-green">
              <img src={green} alt="img" className="card-img" />
              <div className="card-shop green-shop">
                <img src={shop} alt="img" />
              </div>
            </div>
              <div className="card-star">
                <img src={star} alt="img" />
                <p className="card-star__text">4.50</p>
              </div>
              <div className="card-bottom">
                <p className="card-bottom__text">Green Headphone</p>
                <p className="card-bottom__price">$ 245</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduction;

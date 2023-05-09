import React from "react";
import "./style.css";
import Title from "../Title";

const Subscribe = () => {
  return (
    <section className="page-subscribe">
      <div className="container">
        <div className="subscribe-wrapper">
          <h1 className="titles">Subscribe</h1>
          <p className="subscribe-text">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <form action="#" className="form">
            <input type="email" placeholder="Enter Your email address" className="input" />
            <input type="submit" className="button"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

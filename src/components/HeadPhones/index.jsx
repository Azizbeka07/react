import React from "react";
import "./style.css";
// HEADPHONES IMG
import battery from "../../assets/image/battery.png";
import blooths from "../../assets/image/blooths.png";
import microfon from "../../assets/image/microfon.png";
import HeadPhoneBg from "../../assets/image/yellow.png"

const HeadPhones = () => {
  return (
    <section className="headephone-wrapper">
      <div className="container">
        <div className="content">
          <div className="headphones-left">
            <h2 className="headphone-title">
              Good headphones and loud music is all you need
            </h2>
            <div className="headphones-box">
              <img src={battery} alt="img" />
              <div className="headphones-battery">
                <h2 className="battery-title">Battery</h2>
                <p className="battery-text">Battery 6.2V-AAC codec</p>
                <a href="/" className="battery-link">
                  Learn More
                </a>
              </div>
            </div>
            <div className="headphones-box">
              <img src={blooths} alt="img" />
              <div className="headphones-battery">
                <h2 className="battery-title">Bluetooth</h2>
                <p className="battery-text">Battery 6.2V-AAC codec</p>
                <a href="/" className="battery-link">
                  Learn More
                </a>
              </div>
            </div>
            <div className="headphones-box">
              <img src={microfon} alt="img" />
              <div className="headphones-battery">
                <h2 className="battery-title">Microphone</h2>
                <p className="battery-text">Battery 6.2V-AAC codec</p>
                <a href="/" className="battery-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <img src={HeadPhoneBg} alt="img" className="yellow-bg" />
        </div>
      </div>
    </section>
  );
};

export default HeadPhones;

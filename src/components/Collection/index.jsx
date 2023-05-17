import React from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
// SWIPER IMG
import red from "../../assets/image/red.png";
import orange from "../../assets/image/orange.png";
import blue from "../../assets/image/blue.png";

import { Navigation } from "swiper";
SwiperCore.use([Autoplay]);

const Collection = ({ info }) => {
  console.log(info);
  return (
    <div>
      {info.map(el => (
        <div>
          
        </div>
      ))}
    </div>
  );
};

export default Collection;

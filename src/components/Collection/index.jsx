import React from "react";
import "swiper/css";
import Title from "../Title";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
// SWIPER IMG
import red from "../../assets/image/red.png";
import orange from "../../assets/image/orange.png";
import blue from "../../assets/image/blue.png";

import { Navigation } from "swiper";
SwiperCore.use([Autoplay]);

const Collection = () => {
  return (
    <section>
      <div className="container">
        <Title test={"Our latest colour collection 2021"} />
        <Swiper
          slidesPerView={3.07}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
          }}
          navigation={true}
          className="mySwiper"
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide className="swiper-slide">
            <img src={red} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slider">
            <img src={blue} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={orange} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={red} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slider">
            <img src={blue} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={orange} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Collection;

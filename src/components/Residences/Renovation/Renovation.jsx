import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../../utils/slider.json";
import { sliderSettings } from "../../../utils/common";
import SliderButtons from "../../SliderButtons/SliderButtons";

const Renovation = () => {
  return (
    <Swiper {...sliderSettings}>
      <SliderButtons />
      {data.map((card, i) => (
        <SwiperSlide key={i}>
          <div className="flexColStart r-card">
            <img src={card.image} alt="home" />
            <span className="secondaryText r-price">
              <span style={{ color: "#d89c3e" }}>$</span>
              <span>{card.price}</span>
            </span>

            <span className="primaryText">{card.name}</span>
            <span className="secondaryText">{card.detail}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Renovation;

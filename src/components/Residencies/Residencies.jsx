import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { STRATEGIES, callAxiosApi, getStrategy } from "../../utils/api_utils";

const Residencies = () => {

  const [loading, setLoading] = useState(true); // Initialize loading state
  const [strategy, setStrategy] = useState([]);
  const navigate = useNavigate();


  const handleCardClick = (strategyId) => {
  
      localStorage.setItem("strategyId", strategyId);
  
      navigate("/all-weather-investing");
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    };

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await callAxiosApi(getStrategy, { table: STRATEGIES });

        if (response.data.errorStatus === false) {
          setStrategy(response.data.data); // Update insights with fetched data
        } else {
          // console.log("not get getStrategy data");
        }
      } catch (e) {
        setLoading(false); // Stop loading once the data is fetched or an error occurs

        // console.log("API Not Fetched");
      } finally {
        setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();
  }, []);

  

  if (loading) {
    console.log("Loader should display now");
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <section className="r-wrapper">
      <div className="paddings Residencies-innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="pink-text pink-text-font">
            YOUR INVESTMENT AWAITS
          </span>
          <span className="gray-text">
            Explore top <span className="pink-text">Strategy</span>{" "}
          </span>
        </div>

        <img
          src="./Graphic_Elements.png"
          alt="Upward Arrows"
          className="Graphic-Elements-image"
        />
        <img
          src="./plus-object.png"
          alt="Upward Arrows"
          className="plus-object-image-residencies"
        />

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {strategy.map((card, i) => (
            <SwiperSlide
              key={i}
              onClick={() => handleCardClick(card.strategyId)}
            >
              <div className="r-card-container">
                <div className="flexColStart r-card">
                  <img src={card.icon} alt="home" />

                  <span className="residencies-card-name">
                    {card.volatility} Volatility
                  </span>
                  <span className="residencies-card-name">
                    {card.description}
                  </span>

                  <span className="secondaryText r-price">
                    <span>{card.cagr}</span>
                    <span style={{ color: "orange" }}> %</span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

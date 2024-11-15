import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import HeroReviewCard from "./HeroReviewCard";
import StrategyComponent from "./StrategyComponent";
import reviewerImage from "/face-icon.png";
import AuthenticationPopup from "../Header/AuthenticationPopup.jsx";

// import assuredGrowth from './assured-growth.png'; // Add the path to your image
// import upwardArrows from './upward-arrows.png'; // Add the path to your image

const Hero = () => {
  const navigate = useNavigate();

  const [isAuthenticationPopupVisible, setIsAuthenticationPopupVisible] =
    useState(false);

  const handleExploreClick = () => {
    navigate("/strategies"); // Redirect to the /strategies page
    window.scrollTo(0, 0);

  };
  const handleInvestingClick = () => {
    setIsAuthenticationPopupVisible(true);
  };

  const closePopup = () => {
    console.log("closePopup setIsAuthenticationPopupVisible");
    
    setIsAuthenticationPopupVisible(false);
  };
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle"></div> */}
            <h1>
              Empower Your
              <br />
              <span className="sky-blue-text">Investment</span> with
              <br />
              ML & AI driven
              <br />
              <span className="sky-blue-text"> Strategies</span>
            </h1>
          </div>
          <div className="flexColStart des">
            <span className="secondaryText">
              We always make our customer happy by providing
            </span>
            <span className="secondaryText">as many choices as possible</span>
          </div>

          <div className="flexCenter btn-gap btn-margin">
            <button className="button btn-radius" onClick={handleExploreClick}>
              Explore Strategies
            </button>
            <button
              className="button btn-radius start-investing"
              onClick={handleInvestingClick}
            >
              <img src="./play-circle.png" alt="Play Icon" />
              Start Investing
            </button>
            <img
              src="./vertical-triangle.png"
              alt="Play Icon"
              className="vertical-triangle"
            />
          </div>

          {/* <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8850} end={8876} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={5360} end={5468} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={7} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div> */}
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./group-5837.jpg" alt="Hero Image" />
          </div>

          <div className="left-images">
            <img
              src="./tick-mark-Icon.png"
              alt="Upward Arrows"
              className="tick-mark-Icon"
            />
          </div>
          {/* HeroReviewCard */}
          {/* <div className="hero-review-card hero-review-card-alignment">
         </div> */}
          <HeroReviewCard
            image={reviewerImage}
            rating={5}
            text="20k+ Customer Review"
          />

          <StrategyComponent />

          <div className="right-images">
            <img
              src="./graph-image.png"
              alt="Assured Growth"
              className="graph-image"
            />
          </div>
        </div>

        {/* Images on the left and right */}
        {/* <div className="left-images">
          <img
            src="./tick-mark-Icon.png"
            alt="Upward Arrows"
            className="left-image"
          />
        </div> */}
      </div>
      {isAuthenticationPopupVisible && (
        <AuthenticationPopup closePopup={closePopup} />
      )}
    </section>
  );
};

export default Hero;

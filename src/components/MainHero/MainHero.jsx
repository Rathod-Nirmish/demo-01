import React from "react";
import "./MainHero.css";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import CountUp from "react-countup";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter  hero-container-main ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle"></div> */}
            <h1>
              Experienced trading
              <br />
              platform to <span className="pink-yellow-gradient">grow</span>
            </h1>
          </div>
          <div className="flexColStart des">
            <span className="secondaryText">
              Manage all your assets together
            </span>
            <span className="secondaryText">
              Access exclusive insights for a healthy portfolio
            </span>
          </div>

          <div className="flexCenter btn-gap btn-margin ">
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
            {/* <input type="text" placeholder="Search for the location"/> */}
            {/* <button className="button btn-radius " onClick={()=> navigate("/strategies"); window.scrollTo(0, 0);}>Get started now</button> */}
            <button
              className="button btn-radius"
              onClick={() => {
                navigate("/strategies");
                window.scrollTo(0, 0); // Scroll to the top
              }}
            >
              Get started now
            </button>

            <img
              src="./vertical-triangle.png"
              alt="Play Icon"
              className="vertical-triangle-main-hero"
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
          <div className="image-container-main">
            <img src="./main-hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

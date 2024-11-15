import React from "react";
import "./AboutUsHero.css";
import CountUp from "react-countup";

const AboutUsHero = () => {
  return (
    <section className="about-us-hero-wrapper">
      <div className="paddings innerWidth flexCenter  about-us-hero-container-main ">
        {/* left side */}
        <div className="flexColStart about-us-hero-left">
          <div className="about-us-hero-title">
            {/* <div className="orange-circle"></div> */}
            <h1>
              A New Generation Of
              <br />
              investors to the indian <br />
              <span className="blue-light-blue-gradient">
                {" "}
                Equity markets
              </span>{" "}
              using <br />
              Technology
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
            <button className="join-our-team-button btn-radius">
              Join Our Team
            </button>

            {/* <img
              src="./vertical-triangle.png"
              alt="Play Icon"
              className="vertical-triangle-main-about-us-hero"
            /> */}
          </div>

          {/* <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8850} end={8876} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5360} end={5468} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={7} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div> */}
        </div>

        {/* right side */}
        <div className="flexCenter about-us-hero-right">
          <div className=" image-container-main-padding">
            <img src="./about-us-hero-image.png" alt="" className="image-container-main-about-us-hero-image" />
          </div>
        </div>
        {/* <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={8850} end={8876} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={5360} end={5468} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customers</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp end={7} />
              <span>+</span>
            </span>
            <span className="secondaryText">Award Winning</span>
          </div>
        </div> */}
        {/* black card */}
        <div className="stats-container">
          <div className="stat-item-1">
            <h1 className="stat-item-1-h1">2024</h1>
            <p>Launched In</p>
          </div>
          <div className="vertical-line"></div>
          <div className="stat-item-2">
            <h1 className="stat-item-1-h1">20+</h1>
            <p>Team</p>
          </div>
          <div className="vertical-line"></div>
          <div className="stat-item-3">
            <h1 className="stat-item-1-h1">₹29000+ Cr</h1>
            <p>Amount Transacted</p>
          </div>
          <div className="vertical-line"></div>
          <div className="stat-item-4">
            <h1 className="stat-item-1-h1">5M+</h1>
            <p>Customers</p>
          </div>
          <div className="vertical-line"></div>
          <div className="stat-item-5">
            <h1 className="stat-item-1-h1">80+</h1>
            <p>Equity Cases Curated</p>
          </div>
        </div>
        {/*  */}
        {/* <div className="we-believe-buying-container">
            <div><span>We believe buying</span></div>
            <div><span>Mission, Vision & Values</span></div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUsHero;

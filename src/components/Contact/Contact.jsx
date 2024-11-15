import React from "react";
import "./Contact.css";
import CountUp from "react-countup";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container-contact margin-contact">
        {/* left side  */}
        <div className="flexColStart c-left contact-text-align">
          <span>
            <p className="pinkText"> S E M I &nbsp;  A C T I V E  <br /> I N V O L V E M E N T</p>
            <div className="black-color">
              Your all time <br /> involvement is not <br /> necessary for
              growth{" "}
            </div>
          </span>

          <div className="flexCenter stats-contact-box ">
            <div className="flexColStart stat round-border-contact ">
              <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={500} duration={4} />
                    <span>k+</span>
                  </span>
                </h1>
                <span className="secondaryText">Trading</span>
              </div>
            </div>
            <div className="flexColStart stat round-border-contact-right-box">
            <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={100} duration={4} />
                    <span>%</span>
                  </span>
                </h1>
                <span className="secondaryText">Time Saving</span>
              </div>
            </div>
          </div>
        </div>
        <img
              src="./small-gradient-ball-02.png"
              alt="Upward Arrows"
              className="small-gradient-ball-02"
            />

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container-pink-blue-img-right">
            <img src="./group-9238.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

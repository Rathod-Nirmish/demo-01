import React, { useState } from "react";
import CountUp from "react-countup";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import "./Value.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container value-component-whole-padding ">
        {/* left side */}
        <div className="v-left">
          <div className="image-container-pink-blue-img-left">
            <img src="./group-9239.jpg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="pinkText">MORE CONTROL</span>

          <span className="black-color">
            You have full <br /> authority to by and <br /> sell stocks
          </span>

          <div className="flexCenter stats-value-box ">
            <div className="flexColStart stat round-border-value ">
              <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={5} duration={4} />
                    <span>k+</span>
                  </span>
                </h1>
                <span className="secondaryText">Happy Customer</span>
              </div>
            </div>
            <div className="flexColStart stat round-border-value-right-box">
              <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={120} duration={4} />
                    <span>+</span>
                  </span>
                </h1>
                <span className="secondaryText">Investments</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./small-gradient-ball.png"
          alt="Upward Arrows"
          className="small-gradient-ball"
        />
      </div>
    </section>
  );
};

export default Value;

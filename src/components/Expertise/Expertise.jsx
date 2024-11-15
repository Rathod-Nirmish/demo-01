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
import "./Expertise.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container value-component-whole-padding">
        {/* left side */}
        <div className="v-left">
          <div className="image-container-pink-blue-img-left">
            <img src="./group-9241.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <p className="pinkText">N O &nbsp;   N E E D &nbsp;  O F <br /> E X P E R T I E S</p>

          <span className="black-color">
            We're doing <br /> Research on your <br /> Behalf
          </span>

          <div className="flexCenter stats-value-box ">
            <div className="flexColStart stat round-border-expertise ">
              <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={500} duration={4} />
                    <span>k+</span>
                  </span>
                </h1>
                <span className="secondaryText">Strategy</span>
              </div>
            </div>
            <div className="flexColStart stat round-border-expertise-right-box">
              <div className="stat-content">
                <h1>
                  <span className="value-box-color">
                    <CountUp start={0} end={100} duration={4} />
                    <span>%</span>
                  </span>
                </h1>
                <span className="secondaryText">Research</span>
              </div>
            </div>
          </div>
        </div>
        <img
              src="./small-gradient-ball-03.png"
              alt="Upward Arrows"
              className="small-gradient-ball-03"
            />
      </div>
    </section>
  );
};

export default Value;

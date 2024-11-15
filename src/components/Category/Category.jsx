import React from "react";
import "./Category.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Category = () => {

  const contactModesData = [
    {
      icon: './trading-01.png',
      title: "Trading",
      description: "Take exposure to important sectors of the economy"
    },
    {
      icon: './investment-01.png',
      title: "Investment",
      description: "Go for stable returns at low volatility levels"
    },
    {
      icon: './derivatives-01.png',
      title: "Derivatives",
      description: "Build a foundation with a portfolio of equity, gold & fixed income ETFs"
    }
  ];

  return (
    <section className="c-wrapper flexStart category-gradient">
        {/* left */}
        
        <div className="r-head flexColStart paddings left-category-text">
          <span className="pink-text-category pink-text-category-font">CATEGORY</span>
          <span className="black-color">Our top value</span>
          <span className="black-color">categories for you</span>
        </div>
        
        {/* right */}
      <div className="paddings innerWidth flexCenter c-container">
      <div className="flexEnd paddings">
        <div className="flexColCenter contactModes">
          {/* First row */}
          <div className="flexStart row">
            {contactModesData.map((mode, index) => (
              <div className="flexColCenter mode-category" key={index}>
                <div className="flexStart">
                  <div className="flexColStart detail-category">
                    {/* <div className="primaryText">{mode.icon}</div> */}
                    <img src={mode.icon} alt="home" className="category-icon-style" />
                    <div className="black-color category-icon-padding">{mode.title}</div>
                    <div className="category-description">{mode.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Category;

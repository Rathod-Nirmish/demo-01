import React from "react";
import MissionVisionValuesCard from "./MissionVisionValuesCard";

import "./WeBelieveBuying.css";

const WeBelieveBuying = () => {
  const cardData = [
    {
      icon: "./mission-card-image.png",
      number: "01",
      title: "Mission",
      description:
        "AAM Is Committed To Successfully Solving Inefficiencies In The Lending Markets By Creating By Harnessing The Potential Behind Equity Markets.",
    },
    {
      icon: "./vision-card-image.png",
      number: "02",
      title: "Vision",
      description:
        "AAM Is Committed To Successfully Solving Inefficiencies In The Lending Markets By Creating By Harnessing The Potential Behind Equity Markets.",
    },
    {
      icon: "./values-card-image.png",
      number: "03",
      title: "Values",
      description:
        "AAM Is Committed To Successfully Solving Inefficiencies In The Lending Markets By Creating By Harnessing The Potential Behind Equity Markets.",
    },
  ];
  return (
    <div className="WeBelieveBuying-container-main">
      <div className="WeBelieveBuying-container">
        <div className="WeBelieveBuying-left">
          <p>
            We <span className="WeBelieveBuying-highlight">Believe</span> Buying
            Equity <br /> Shouldn't Be So Hard
          </p>
        </div>
        <div className="WeBelieveBuying-right">
          <h2>Mission, Vision & Values</h2>
          <p>
            Greed And Fear Has The Power To Send A Chemical Rush That Can Easily
            Overwhelm Rational Decision Making.
          </p>
        </div>
      </div>
      {/* card */}
      <div className="MissionVisionValuesCard-card-container">
        {cardData.map((card, index) => (
          <MissionVisionValuesCard
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WeBelieveBuying;

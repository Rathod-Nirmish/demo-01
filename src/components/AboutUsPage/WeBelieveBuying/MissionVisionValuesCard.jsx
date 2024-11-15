import React from "react";

import "./MissionVisionValuesCard.css";

const MissionVisionValuesCard = ({ icon, number, title, description }) => {
  return (
    <div className="WeBelieveBuying-card">
      <div className="WeBelieveBuying-card-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="WeBelieveBuying-card-number">{number}</div>
      <div className="WeBelieveBuying-card-title">{title}</div>
      <div className="WeBelieveBuying-card-description">{description}</div>
    </div>
  );
};

export default MissionVisionValuesCard;

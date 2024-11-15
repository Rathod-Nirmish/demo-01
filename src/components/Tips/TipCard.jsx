import React from "react";

const TipCard = ({ imgSrc, title, description, onClick, isSelected }) => {
  return (
    <div className={`flexStart row ${isSelected ? "selected-tip" : ""}`} onClick={onClick}>
      <div className="flexColCenter mode-tips tips-card-background-color">
        <div className="flexStart">
          <div className="flexCenter">
            <img src={imgSrc} alt={title} />
          </div>
          <div className="flexColStart detail">
            <span className="black-color">{title}</span>
            <span className="secondaryText">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;

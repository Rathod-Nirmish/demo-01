import React from 'react';
import './InvestmentCard.css';

const InvestmentCard = ({ title, description, tag, buttonText }) => {
  return (
    <div className="investment-card">
      <div className="icon-placeholder"></div>
      <div className="investment-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span className={`tag ${tag.toLowerCase()}`}>{tag}</span>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default InvestmentCard;

// src/InvestmentCards.js
import React from "react";
import "./InvestmentCards.css";

const InvestmentCards = () => {
  const cards = [
    {
      title: "Equity & Debt",
      value: "3,730",
      change: "16.68%",
      volatility: "Medium volatile",
      percentage: "78%",
      icon: "top-100.png",
      color: "blue",
    },
    {
      title: "Data 2",
      value: "12%",
      change: "-2.89%",
      volatility: "Low volatile",
      percentage: "16%",
      icon: "equity-gold.png",
      color: "green",
    },
    {
      title: "Data 3",
      value: "200",
      change: "2.89%",
      volatility: "Low volatile",
      percentage: "36%",
      icon: "equity-debt.png",
      color: "green",
    },
    {
      title: "Data 4",
      value: "5.5:1",
      change: "2.89%",
      volatility: "High volatile",
      percentage: "90%",
      icon: "weather-investing.png",
      color: "red",
    },
  ];

  return (
    <div className="investment-cards">
      {/* <h2 className="ideal-for-getting">Ideal For Getting Started</h2> */}
      {/* <p className="equitycases-with-low">Equitycases with low volatility and low investment amounts</p> */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card-investment">
            <div className="card-header">
              <h3>{card.title}</h3>
              <img src={card.icon} alt={card.title} className="card-icon" />
            </div>
            <div className="card-body">
              <div className="value-change-row">
                <p className="value">{card.value}</p>
                <p
                  className={`change ${
                    card.change.startsWith("-") ? "negative" : "positive"
                  }`}
                >
                  {card.change}
                </p>
              </div>
              <p className="volatility">{card.volatility}</p>
              <div className="progress-bar-wrapper">
                <span className="progress-percentage-left">0 %</span>
                <span className="progress-percentage">{card.percentage}</span>
                <div className="progress-bar-background">
                  <div
                    className="progress-bar"
                    style={{ background: card.color, width: card.percentage }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentCards;

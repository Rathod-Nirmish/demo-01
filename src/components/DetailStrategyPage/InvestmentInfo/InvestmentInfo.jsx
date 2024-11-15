// src/components/InvestmentInfo.js
import React from 'react';
import './InvestmentInfo.css';
// import waterDropIcon from './waterDropIcon.png'; // Adjust the path as per your project structure

const InvestmentInfo = () => {
  return (
    <div className="investment-info">
      <div className="crypto-exchanges">
        <h3>Best Crypto Exchanges</h3>
        <img src="cryptoImage.png" alt="Crypto" /> {/* Replace with the actual image */}
      </div>
      <div className="investment-details">
        <div className="tabs">
          <button className="active">Active</button>
          <button>Gainers</button>
          <button>Losers</button>
        </div>
        <div className="investment">
          <div className="investment-icon">
            {/* <img src={waterDropIcon} alt="Water Drop" /> */}
          </div>
          <div className="investment-info">
            <h4>All Weather Investing</h4>
            <p>Advanced Micro Tech</p>
          </div>
          <div className="investment-stats">
            <p>₹ 142.79</p>
            <p className="positive">+6.58%</p>
            <p className="positive">+3.10</p>
          </div>
        </div>
        <div className="investment">
          <div className="investment-icon">
            <div className="icon-placeholder">EI</div>
          </div>
          <div className="investment-info">
            <h4>Equity Large Cap</h4>
            <p>NVDA Corporation</p>
          </div>
          <div className="investment-stats">
            <p>₹ 150.94</p>
            <p className="positive">+6.56%</p>
            <p className="positive">+7.10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfo;

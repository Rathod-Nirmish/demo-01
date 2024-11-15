import React from 'react';
import './InvestingForYou.css';
// import imagePath from './need-to-invest.PNG';

const InvestingForYou = () => {
  return (
    <div className="container-invest-for-you">
      <h1 className="title">EVERYTHING YOU NEED TO INVEST</h1>
      <h2 className="subtitle">Simple, quick & delightful investing for you</h2>
      <div className="content-container">
        <div className="feature-list">
          <div className="feature-item">
            <div className="icon icon-map">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Track anytime, anywhere</h3>
              <p className="feature-description">
                Track & manage seamlessly with a real-time index value, inclusive of corp.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon icon-thumbs">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Invest regularly</h3>
              <p className="feature-description">
                Place orders for up to 50 stocks in 1 click as a Equitycase and save time.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon icon-coffee">
              <i className="fas fa-coffee"></i>
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Invest regularly</h3>
              <p className="feature-description">
                Invest in a disciplined manner by starting on your Equitycase for every week.
              </p>
            </div>
          </div>
        </div>
        <div className="image-container-invest-for-you">
          <img className="image-invest-for-you" src='./group-18371.jpg' alt="Investment" />
        </div>
      </div>
    </div>
  );
};

export default InvestingForYou;

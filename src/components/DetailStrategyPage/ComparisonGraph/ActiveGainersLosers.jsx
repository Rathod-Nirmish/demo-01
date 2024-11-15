import React from "react";
import "./ActiveGainersLosers.css";

const ActiveGainersLosers = ({
  icon,
  title,
  company,
  price,
  changePercent,
  changeValue,
}) => {
  return (
    <div>
      <div className="agl-card">
        <div className="agl-card-content">
          <div className="agl-card-header">
            <div >
              <img
                src={icon}
                alt={icon}
                className="agl-card-icon"
                // className="insight-icon"
              />
            </div>
            <div className="agl-card-info">
              <h4>{title}</h4>
              <p>{company}</p>
            </div>
          </div>
          <div className="agl-card-price">
            <p>₹ {price.toFixed(2)}</p>
            <p className={changePercent > 0 ? "agl-positive" : "agl-negative"}>
              {changePercent > 0
                ? `+${changePercent.toFixed(2)}%`
                : `${changePercent.toFixed(2)}%`}
              <span>
                {changePercent > 0
                  ? `+${changeValue.toFixed(2)}`
                  : `${changeValue.toFixed(2)}`}
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr className="horizontal-line-agl-card" />
    </div>
  );
};

export default ActiveGainersLosers;

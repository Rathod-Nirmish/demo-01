// src/Overview.js
import React from "react";
import "./Overview.css";

const Overview = () => {
  const data = [
    {
      title: "NFT",
      value: "22,559.65",
      change: "+0.13%",
      changePositive: true,
      image: "./red-chart.png",
    },
    {
      title: "Invested Amount",
      value: "$48.86K",
      change: "",
      changePositive: true,
      image: "",
    },
    {
      title: "Total Returns",
      value: "$78.86K",
      change: "+4.13%",
      changePositive: true,
      image: "./green-chart.png",
    },
  ];

  return (
    <div className="overview ">
      <div className="overview-card-container">
        <h2 className="overview-h2">Overview</h2>
        <hr className="horizontal-line-overview" />
        <div className="overview-cards ">
          {data.map((item, index) => (
            <div key={index} className="overview-card">
              <h3>{item.title}</h3>
              <p className="value">{item.value}</p>
              <p
                className={`change-container change ${
                  item.changePositive ? "positive" : "negative"
                }`}
              >
                {/* <span className="green-round-background">{item.change}</span> */}
                <span className={item.change ? "green-round-background" : ""}>
                  {item.change}
                </span>

                <img
                  src={item.image}
                  // alt="Chart"
                  className="chart"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;

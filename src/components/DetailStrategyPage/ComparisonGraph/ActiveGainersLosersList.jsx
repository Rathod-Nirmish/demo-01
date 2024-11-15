import React, { useState } from "react";
import ActiveGainersLosers from "./ActiveGainersLosers";
import "./ActiveGainersLosersList.css";

const investments = {
  active: [
    {
      icon: "/weather-investing.png",
      title: "All Weather Investing",
      company: "Advanced Micro Tech",
      price: 142.79,
      changePercent: 6.58,
      changeValue: 3.1,
    },
    {
      icon: "./en-image.png",
      title: "Equity Large Cap",
      company: "NVDA Corporation",
      price: 150.94,
      changePercent: 6.56,
      changeValue: 7.1,
    },
  ],
  gainers: [
    {
      title: "Tech Gainers",
      company: "Apple Inc.",
      price: 200.0,
      changePercent: 5.0,
      changeValue: 10.0,
    },
  ],
  losers: [
    {
      title: "Tech Losers",
      company: "Intel Corp.",
      price: 50.0,
      changePercent: -2.0,
      changeValue: -1.0,
    },
  ],
};

const ActiveGainersLosersList = () => {
  const [activeTab, setActiveTab] = useState("active");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="agl-list">
      <div className="agl-tabs">
        <button
          className={activeTab === "active" ? "active" : ""}
          onClick={() => handleTabClick("active")}
        >
          Active
        </button>
        <button
          className={activeTab === "gainers" ? "active" : ""}
          onClick={() => handleTabClick("gainers")}
        >
          Gainers
        </button>
        <button
          className={activeTab === "losers" ? "active" : ""}
          onClick={() => handleTabClick("losers")}
        >
          Losers
        </button>
      </div>
      {investments[activeTab].map((investment, index) => (
        <ActiveGainersLosers key={index} {...investment} />
      ))}
    </div>
  );
};

export default ActiveGainersLosersList;

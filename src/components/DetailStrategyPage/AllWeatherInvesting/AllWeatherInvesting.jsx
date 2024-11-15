// src/components/AllWeatherInvesting.js

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./AllWeatherInvesting.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
} from "../../../utils/api_utils";

// import waterDropIcon from './waterDropIcon.png'; // Adjust the path as per your project structure

const AllWeatherInvesting = () => {
  const [strategyData, setStrategyData] = useState(null);
  // const location = useLocation();
  // const strategyData = location.state?.strategyData;
  // console.log("AllWeatherInvesting strategyData", strategyData);

  useEffect(() => {
    const getStrategyData = async () => {
      try {
        const strategyId = localStorage.getItem("strategyId");
        console.log("strategyId", strategyId);

        const response = await callAxiosApi(getStrategy, {
          table: STRATEGIES,
          filters: {
            strategyId: Number(strategyId),
          },
        });
        console.log("filters response", response.data?.data[0]);

        if (response.data.errorStatus === false) {
          setStrategyData(response.data.data[0]); // Update insights with fetched data
          // toast.success("Strategy fetch successful!");
        } else {
        }
      } catch (e) {
        toast.error("Strategy fetch failed, please try again.");
      }
    };
    getStrategyData();
  }, []);

  return (
    <div className="all-weather-investing">
      <h1 className="title-all-weather-investing">
        <img
          src="./weather-investing.png"
          className="AllWeatherInvesting-weather-investing-image"
          alt=""
        />
        {strategyData?.name}
        {/* All Weather Investing */}
        {/* <img src={waterDropIcon} alt="water drop icon" className="icon" /> */}
      </h1>
      <p className="subtitle">
        One Investment For All Market Conditions. Works For <br /> Everyone
      </p>
      <div className="cagr-container">
        <span className="cagr-label">3Y CAGR</span>
        <span className="cagr-value">+{strategyData?.cagr}</span>
        <span className="cagr-dot"></span>
      </div>
    </div>
  );
};

export default AllWeatherInvesting;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const navigate = useNavigate();

  const [sliceWords, setSliceWords] = useState(5); // Initialize as an empty array

  const handleVolatilityClick = () => {
    console.log({
      props,
    });

    console.log("strategyData", props.strategyId);

    localStorage.setItem("strategyId", props.strategyId);

    navigate("/all-weather-investing", {
      state: { strategyData: props },
    });
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.listItem} onClick={handleVolatilityClick}>
      <div className={styles.icon}>
        <img src="./equity-gold.png" alt={props.name} />
        {/* <img src={props.icon} alt={props.name} /> */}
      </div>
      <div className={styles.details}>
        <h4>{props.name}</h4>
        <p>{props.description.split(" ").slice(0, sliceWords).join(" ")}...</p>
      </div>
      <div className={styles.minInvestment}>
        <div className={styles.minInvestmentText}>Min.Amount: </div>
        <div className={styles.minInvestmentNumber}>{props.minInvestment}</div>
      </div>
      <div className={styles.ycagr}>
        <div className={styles.ycagrYears}>{props.years}YCAGR:</div>
        <div
          className={styles.ycagrPercentage}
          style={{ color: props.cagr >= 0 ? "green" : "red" }}
        >
          {props.cagr}%
        </div>
      </div>
      <div className={styles.stats}>
        <div
          className={styles.volatility}
          data-volatility={props.volatility}
          // onClick={handleVolatilityClick}
        >
          {props.volatility} Volatility
        </div>
      </div>
    </div>
  );
};

export default ListItem;

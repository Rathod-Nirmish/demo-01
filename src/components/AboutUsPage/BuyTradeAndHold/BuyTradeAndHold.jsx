import React from "react";
import styles from "./BuyTradeAndHold.module.css";
import backgroundImage from "/BuyTradeAndHold.png"; // Make sure to update the path

const BuyTradeAndHold = () => {
  return (
    <div className={styles.outerContainer}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Buy, Trade, And Hold <br /> 600+ Strategies On{" "}
            <span className={styles.highlight}>Equity Case</span>
          </h1>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BuyTradeAndHold;

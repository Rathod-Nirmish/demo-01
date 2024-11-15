import React from 'react';
import styles from './StrategyComponent.module.css'; // Assuming you're using CSS Modules

const StrategyComponent = () => {
  return (
    <div className={styles.strategyCard}>
      <div className={styles.header}>
        <p>Strategies</p>
      </div>
      <div className={styles.details}>
        <p className={styles.number}>3,258</p>
        <div className={styles.graphLine}>
          {/* This can be an image or an SVG */}
          {/* <svg
            width="40"
            height="10"
            viewBox="0 0 40 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5 Q20 0, 40 5"
              stroke="#f47521"
              strokeWidth="2"
              fill="none"
            />
          </svg> */}
            <img src='./graph-landing-first-component.png' className={styles.graphLanding} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default StrategyComponent;

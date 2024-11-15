// src/KnowledgeCentre.js
import React from "react";
import styles from "./KnowledgeCentre.module.css";

const KnowledgeCentre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>
          Knowledge Centre <img src="./chat.png" className={styles.chatImage} />{" "}
        </h1>
        <p className={styles.subtitle}>
          If You Have Any Query Please Feel Free To Contact Us
        </p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="./call-gradient-image.png" className={styles.callImage} />
          </div>
          <div>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>+91-9925511993</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="./email-pic.png" className={styles.callImage} />
          </div>
          <div>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>info@profitbuddy.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCentre;

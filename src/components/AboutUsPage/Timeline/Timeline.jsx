import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        The <span className={styles.highlight}>Story</span>
      </h1>
      <h2 className={styles.subtitle}>
        A Story Of Money And The Future Of Banking
      </h2>
      <p className={styles.description}>
        Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do <br /> Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna  <br /> Aliqua Ut Dolor Sit.
      </p>
      <img
        className={styles.timelineImage}
        src="/Story-Graph.png" // Replace with the correct path to the uploaded image
        alt="Timeline"
      />
    </div>
    // <div className={styles.timelineContainer}>
    //   <div className={styles.timeline}>
    //     {/*  */}
    //     {/* <svg className={styles.timeline} viewBox="0 0 1000 200">
    //     <path
    //       d="M 0 100 Q 200 0 400 100 T 800 100 T 1200 100 T 1600 100 T 2000 100"
    //       fill="transparent"
    //       stroke="#e0e0e0"
    //       strokeWidth="2"
    //     />
    //     </svg> */}

    //     <div className={styles.event}>
    //       <div className={styles.date}>Oct. 2014</div>
    //       <div className={styles.description}>Hired Our First Employee</div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>Nov. 2014</div>
    //       <div className={styles.description}>Launched Strategy</div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>Oct. 2015</div>
    //       <div className={styles.description}>
    //         1st Prize By India Investors Summit
    //       </div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>July 2016</div>
    //       <div className={styles.description}>App Launched</div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>April 2018</div>
    //       <div className={styles.description}>Global Exchange Launched</div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>Jan. 2020</div>
    //       <div className={styles.description}>
    //         Launch On
    //         <div className={styles.flags}>
    //           <span className={`${styles.flag} ${styles.india}`}></span>
    //           <span className={`${styles.flag} ${styles.uk}`}></span>
    //           <span className={`${styles.flag} ${styles.usa}`}></span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.event}>
    //       <div className={styles.date}>Jan. 2024</div>
    //       <div className={styles.description}>Trusted By 1 Million+ Users</div>
    //       <div className={styles.stars}>
    //         <span>⭐</span>
    //         <span>⭐</span>
    //         <span>⭐</span>
    //         <span>⭐</span>
    //         <span>⭐</span>
    //       </div>
    //     </div>

    //     {/*  */}
    //   </div>
    // </div>
  );
};

export default Timeline;

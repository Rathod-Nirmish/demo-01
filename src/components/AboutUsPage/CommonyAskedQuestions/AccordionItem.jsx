import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./AccordionItem.module.css";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={`${styles.questionContainer} ${isOpen ? styles.active : ""}`}
          onClick={onClick}
        >
          <p className={styles.questionContent}>{question}</p>
          <RiArrowDropDownLine className={`${styles.arrow} ${isOpen ? styles.active : ""}`} />
        </button>

        <div
          ref={contentHeight}
          className={styles.answerContainer}
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className={styles.answerContent}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { RiArrowDropDownLine } from "react-icons/ri";

import AccordionItem from "./AccordionItem";

import styles from "./CommonyAskedQuestions.module.css";

const CommonyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [OrderQuestionsActiveIndex, OrderQuestionsSetActiveIndex] =
    useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleOrderQuestionsClick = (index) => {
    OrderQuestionsSetActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const data = [
    {
      question: "What, Why, Who of investing in Equitycases",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      question: "Things to know before making your 1st investment",
      answer:
        "Since 2018 eQUITY has strived to bring professional financial services to the world of digital assets. Leveraging the best of the team's years of experience in FinTech along with the power oF technology.",
    },
    {
      question: "All you need to know about smallcase subscriptions",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      question: "Who created equity?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
    {
      question: "What is Equity investment?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];
  const orderQuestions = [
    {
      question: "All you need to know about smallcase subscriptions",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      question: "Know more about taking a loan against mutual funds",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      question: "How many devices can I login my Equity account to?",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
  ];

  return (
    <div className={styles.CommonyAskedQuestionsMainContainer}>
      <div className={styles.TitleDescriptionContainer}>
        <div className={styles.TitleSize}>Find your commonly asked <span className={styles.QuestionsGradient}>Questions</span> </div>
        <div>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor </div>
        <div>incididunt ut labore et dolore magna aliqua ut dolor sit</div>
      </div>
      <div className={styles.containerPeopleAlsoAsk}>
        <div className={styles.leftSide}>
          <div>Market</div>
        </div>
        <div className={styles.rightSide}>
          <div>
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className={styles.containerPeopleAlsoAsk}>
        <div className={styles.leftSide}>
          <div>Order</div>
        </div>
        <div className={styles.rightSide}>
          <div>
            {orderQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={OrderQuestionsActiveIndex === index}
                onClick={() => handleOrderQuestionsClick(index)}
              />
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default CommonyAskedQuestions;

// <div className={styles.containerPeopleAlsoAsk}>
//       <div className={styles.peopleAlsoAskTitleStyle}>
//         Find Your Commonly Asked{" "}
//         <span className={styles.PeopleAlsoAskEquityWord}>Equity</span>
//       </div>
//       <div>
//         <div>Market</div>
//         <div>
//           {data.map((item, index) => (
//             <AccordionItem
//               key={index}
//               question={item.question}
//               answer={item.answer}
//               isOpen={activeIndex === index}
//               onClick={() => handleItemClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>

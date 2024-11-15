// PeopleAlsoAsk

import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { useSpring, animated } from "@react-spring/web";
import { RiArrowDropDownLine } from "react-icons/ri";

import AccordionItem from "./AccordionItem";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  FAQS,
} from "../../../utils/api_utils";

import "./PeopleAlsoAsk.css";

const PeopleAlsoAsk = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [strategyId, setStrategyId] = useState(null);

  const [faqs, setFaqs] = useState([]); 
  // const [loading, setLoading] = useState(true); // Initialize loading state

  const location = useLocation();
  const tempStrategyData = location.state?.strategyData;
  // const strategyData = JSON.stringify(tempStrategyData)

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const strategyId = localStorage.getItem("strategyId");
        setStrategyId(strategyId)

        const response = await callAxiosApi(getStrategy, { table: FAQS });

        if (response.data.errorStatus === false) {
          setFaqs(response.data.data); // Update insights with fetched data
        } else {
          console.log("not get getStrategy data");
        }
      } catch (e) {
        console.log("API Not Fetched");
      } finally {

        // setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      question:
        "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  return (
    <div className="container-PeopleAlsoAsk">
      <div className="people-also-ask-title-style">
        People Also Ask: Other Questions About{" "}
        <span className="PeopleAlsoAsk-equity-word">Equity</span>
      </div>
      {/* first filter data then map */}
      {faqs.filter(item => item.strategyId === Number(JSON.stringify(strategyId))).
      map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default PeopleAlsoAsk;

// import React, { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";

// const PeopleAlsoAsk = () => {
//   const [isOpen, setIsOpen] = useState({
//     0: false,
//     1: false,
//     2: false,
//     3: false, // Add more indices for additional components
//   });

//   const expandAnimation = (index) => useSpring({
//     height: isOpen[index] ? 200 : 0,
//     opacity: isOpen[index] ? 1 : 0,
//     overflow: "hidden",
//   });

//   const handleClick = (index) => {
//     setIsOpen((prevIsOpen) => {
//       return Object.keys(prevIsOpen).reduce((acc, key) => {
//         acc[key] = key === index.toString() ? !prevIsOpen[key] : false;
//         return acc;
//       }, {});
//     });
//   };

//   return (
//     <div className="container">
//       {[0, 1, 2, 3].map((index) => ( // Add more indices for additional components
//         <div
//           key={index}
//           style={{
//             width: "18rem",
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <p onClick={() => handleClick(index)}>
//             {index === 0 && "How Many Equitys Are There?"}
//             {index === 1 && "What Role Does Equity Have As A Store Of Value?"}
//             {index === 2 && "How Is Equity Different From Mutual Fund?"}
//             {index === 3 && "Why Do Equity Price Changes Impact Others?"}
//             <span
//               className={`arrow ${isOpen[index] ? "arrow-up" : "arrow-down"}`}
//             />
//           </p>
//           <animated.div style={expandAnimation(index)}>
//             <div style={{ padding: "10px" }}>
//               {index === 0 && (
//                 <p>
//                   Since 2018 Equity Has Strived To Bring Professional Financial
//                   Services To The World Of Digital Assets. Leveraging The Best Of
//                   The Team's Years Of Experience In FinTech Along With The Power
//                   Of Blockchain Technology.
//                 </p>
//               )}
//               {index === 1 && <p>Content for Image 1</p>}
//               {index === 2 && <p>Content for Image 2</p>}
//               {index === 3 && <p>Content for Image 3</p>}
//             </div>
//           </animated.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PeopleAlsoAsk;

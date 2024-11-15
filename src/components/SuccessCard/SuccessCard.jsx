import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccessCard.module.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  SUBSCRIPTIONFEES,
  generatePaymentLink,
  makePayment,
} from "../../utils/api_utils";

const SuccessCard = () => {
  const navigate = useNavigate();

  const handleRedirect = async () => {
    // try {
    //   const amount = localStorage.getItem("strategyAmount");
    //   const userId = localStorage.getItem("equity_user_id");
    //   console.log("makePayment response", Number(amount), userId);

    //   const response = await callAxiosApi(makePayment, {
    //     userId: userId,
    //     amount: Number(amount),
    //     currency: "INR",
    //     receipt: "receipt_1234567890",
    //   });
    //   console.log("makePayment response", response);
    // } catch (e) {
    //   console.log("Something went wrong!", e);
    // }
    // if (response?.data?.success) {
    navigate("/all-weather-investing");
    // }
  };

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const timestamp = Date.now();
        const amount = localStorage.getItem("strategyAmount");
        const userId = localStorage.getItem("equity_user_id");
        const userBrokerId = localStorage.getItem("userBrokerId");
        const strategyId = localStorage.getItem("strategyId");

        // console.log(`receipt_${timestamp}`);

        const response = await callAxiosApi(makePayment, {
          userId: userId,
          amount: Number(amount),
          currency: "INR",
          strategyId: Number(strategyId),
          userBrokerId: Number(userBrokerId),
          investmentAmount: Number(amount),
          startDate: "2024-10-07",
          endDate: "2024-12-07",
          receipt: `receipt_${timestamp}`,
        });
        console.log("SuccessCard response",response);
        
        // localStorage.removeItem("strategyAmount");
      } catch (e) {
        console.log("Something went wrong!", e);
      }
    };
    fetchStrategies();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path
                d="M9 12l2 2 4-4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h2 className={styles.h2TagCongratulationsText}>Congratulations</h2>
        <p className={styles.pTagTransactionText}>
          Your transaction was successful and your strategy is active now.
        </p>
        <button className={styles.button} onClick={handleRedirect}>
          Go to strategy page
        </button>
      </div>
    </div>
  );
};

export default SuccessCard;

import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./AboutEquity.css";
import PlansBenefitsPopup from "./PlansBenefitsPopup";
import RebalancePopup from "./RebalancePopup";
import StockTable from "../StockTable/StockTable.jsx";
import AuthenticationPopup from "../../Header/AuthenticationPopup.jsx";

import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USERBROKER,
  userBrokerDetails,
  BOUGHTSTRATEGY,
  generatePaymentLink,
} from "../../../utils/api_utils";

const calculateTimeUntil = (targetHour, targetMinutes) => {
  const now = new Date();

  // Convert UTC time to IST by adding 5 hours and 30 minutes (330 minutes)
  const ISTOffset = 330 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  const nowIST = new Date(now.getTime() + ISTOffset);

  const targetTime = new Date(nowIST);
  targetTime.setHours(targetHour, targetMinutes, 0, 0); // Set the target hour and minutes in IST

  // If the target time is in the past today, schedule it for tomorrow
  if (targetTime < nowIST) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  console.log("targetTime - nowIST",targetTime - nowIST);
  
  return targetTime - nowIST; // Return the difference in milliseconds
};

// Helper function to check if current time is between 8:00 and 8:50 AM IST
const isWithinTimeRange = () => {
  const now = new Date();

  // Convert UTC time to IST
  const ISTOffset = 330 * 60 * 1000;
  const nowIST = new Date(now.getTime() + ISTOffset);

  const currentHour = nowIST.getUTCHours();
  const currentMinutes = nowIST.getUTCMinutes();

  return currentHour === 8 && currentMinutes <= 50;
};

const AboutEquity = () => {
  const [strategyData, setStrategyData] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isInvested, setIsInvested] = useState(false);
  const [SubscribeNow, setSubscribeNow] = useState("Subscribe Now");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRebalancePopupOpen, setIsRebalancePopupOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(""); // New state for input
  const [open, setOpen] = useState(false);
  const [isStockVisible, setIsStockVisible] = useState(false);
  const [isAuthenticationPopupVisible, setIsAuthenticationPopupVisible] =
    useState(false);
  const [isInTimeRange, setIsInTimeRange] = useState(false);

  // const location = useLocation();
  // const strategyData = location.state?.strategyData;

  useEffect(() => {
    const getStrategyData = async () => {
      try {
        setSubscribeNow("Subscribe Now"); 
        const strategyId = localStorage.getItem("strategyId");
        const userId = localStorage.getItem("equity_user_id");
        console.log("userId", userId);

        console.log("strategyId", strategyId);
        // to identify isSubscribed, isInvested
        const getBoughtStrategDatay = await callAxiosApi(getStrategy, {
          table: BOUGHTSTRATEGY,
          filters: {
            userId: Number(userId),
            strategyId: Number(strategyId),
          },
        });

        console.log(
          "getBoughtStrategDatay :",
          getBoughtStrategDatay
        );
        console.log(
          "getBoughtStrategDatay :",
          getBoughtStrategDatay.data.data[0]
        );

        if (getBoughtStrategDatay?.data?.data[0]) {
          if (
            getBoughtStrategDatay?.data?.data[0].isActive === true &&
            getBoughtStrategDatay?.data?.data[0].investmentAmount
          ) {
            setSubscribeNow("Invest Now");
            // setSubscribeNow("Invest Now");
          } else if (getBoughtStrategDatay?.data?.data[0].isActive === true) {
            setSubscribeNow("Invest Now");
          }
        }

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

    const updateTime = () => {
      setIsInTimeRange(isWithinTimeRange());

      if (isWithinTimeRange()) {
        // Time is within range, so we calculate the time until 8:50 AM to hide the component
        const timeUntilEnd = calculateTimeUntil(8, 50);
        setTimeout(updateTime, timeUntilEnd);
      } else {
        // Time is outside range, so we calculate the time until 8:00 AM to show the component
        const timeUntilStart = calculateTimeUntil(8, 0);
        setTimeout(updateTime, timeUntilStart);
      }
    };

    // Initialize the first check
    updateTime();
  }, []);

  const handleSubscribe = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        // toast.error("Please log in to continue.");
        setIsAuthenticationPopupVisible(true);

        // You can also redirect the user to the login page if needed
        return;
      } else {
        const decodedToken = jwtDecode(token); // Use jwtDecode to decode the token
        // console.log("User ID:", decodedToken.id); // Access 'id' from token

        // BrokerList data
        const response = await callAxiosApi(getStrategy, {
          table: USERBROKER,
          filters: { userId: decodedToken.id },
        });
        if (response?.data?.data?.length > 0) {
          // *
          // console.log("SubscribeNow clicked");

          if (SubscribeNow === "Invest Now") {
            // console.log(
            //   "investmentAmount",
            //   Number(investmentAmount),
            //   strategyData.minInvestment
            // );

            if (investmentAmount) {
              // handle min investment amount
              if (Number(investmentAmount) < strategyData?.minInvestment) {
                toast.warning(
                  `Minimum investment amount is ₹${JSON.stringify(
                    strategyData?.minInvestment
                  )}.`
                );
              } else {
                // localStorage.setItem(
                //   "strategyAmount",
                //   Number(investmentAmount)
                // );

                // const customerName = localStorage.getItem("equity_user_name");
                // const customerEmail = localStorage.getItem("equity_user_email");
                // const customerContact =
                //   localStorage.getItem("equity_user_mobile");
                // console.log(
                //   "customerName",
                //   customerName,
                //   customerEmail,
                //   customerContact
                // );

                // handle investment amount
                // const response = await callAxiosApi(generatePaymentLink, {
                //   amount: Number(investmentAmount),
                //   customerName: customerName,
                //   customerEmail: customerEmail,
                //   customerContact: customerContact,
                //   description: "Payment for Invest",
                //   callbackUrl: "http://27.116.52.24:8086/payment-success",
                // });

                // if (response?.data?.success) {
                //   window.location.href = response.data.paymentLink;
                //   // navigate(response.data.paymentLink);

                //   // Handle the Razorpay callback
                // }

                toast.success(
                  <div>
                    <strong>You strategy will start from tomorrow : </strong>
                    {/* <br /> */}
                    <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
                      ₹ {investmentAmount}
                    </span>
                    {/* <strong>Your stratagy</strong> */}

                  </div>
                );

                // setSubscribeNow("Rebalance Now");
              }

              // setTimeout(() => {
              //   setIsRebalancePopupOpen(true);
              // }, 2000);
            } else {
              toast.warning("Please enter an investment amount.");
            }
          } else if (SubscribeNow === "Subscribe Now") {
            setIsPopupOpen(true);
          } else if (SubscribeNow === "Rebalance Now") {
            setIsRebalancePopupOpen(true);
          }
        } else {
          toast.error("Please add Broker for further process!");
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later!");
    }
  };

  const closePopup = () => {
    if (SubscribeNow === "Subscribe Now") {
      // setSubscribeNow("Invest Now");
    }
    setIsAuthenticationPopupVisible(false);
    setIsPopupOpen(false);
  };

  const closeRebalancePopup = () => {
    setIsRebalancePopupOpen(false);
  };

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  const handleToContinueSubscribe = () => {
    setIsPopupOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setIsStockVisible(true);
    // handleSubscribe(); // Call the subscribe function
    handleClose(); // Close the dialog after confirmation
  };

  return (
    <div>
      <div className="equity-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="equity-content">
          <h1 className="AboutEquity-title-style">About The Equity</h1>
          <div className="AboutEquity-description-text-color">
            {strategyData?.description}
            {/* <p>
            All Weather Investing Is A Popular Strategy That Ensures Your
            Investments Do Well In Good As Well As Bad Times. This Is A
            Long-Term Investment Strategy That You Can Use To Build Wealth Over
            The Years To Come.
          </p> */}
            {/* <div className="this-smallcase-invests">
            <ul>
              <li>
                This Smallcase Invests In 3 Asset Classes--Equity, Debt And Gold
              </li>
              <li>
                The Portfolio Is Rebalanced Periodically To Generate Relatively
                Higher Returns By Assuming The Least Possible Risks
              </li>
            </ul>
          </div> */}
            {/* <p>
            This Smallcase Is Ideal For All Types Of Market Conditions. It Will
            Ensure That Neither Will Your Investment Ship Sink, Nor Will The
            Investment Flight Soar To Scary Heights. What You Will Get Here Is A
            Steady Ride To Help You Meet Your Long-Term Investment Goals.
          </p> */}
          </div>
        </div>

        <div className="equity-sidebar">
          {SubscribeNow !== "Subscribe Now" && (
            <h3 className="minimum-investment-amount-text">
              Your strategy ends on date : 21/10/2024
            </h3>
          )}
          {SubscribeNow !== "Rebalance Now" && (
            <h3 className="minimum-investment-amount-text">
              Minimum Investment Amount
            </h3>
          )}
          {SubscribeNow !== "Rebalance Now" && (
            <div className="amount">
              ₹ {JSON.stringify(strategyData?.minInvestment)}
            </div>
          )}
          <hr className="horizontal-line-one-equity-sidebar" />

          <div className="access">
            {SubscribeNow === "Invest Now" && (
              <div className="investment-now-input-textbox-div-style">
                <input
                  type="text"
                  className="investment-now-input-textbox-style"
                  placeholder="Enter amount to be invested"
                  value={investmentAmount}
                  onChange={handleInvestmentChange}
                />
              </div>
            )}
            {SubscribeNow === "Subscribe Now" && (
              <div className="Get-Access-For">Starting from ₹ 2360/3 month</div>
            )}
            {/* Rebalance */}
            {SubscribeNow === "Rebalance Now" && (
              <div className="Get-Access-For">See all plans & benefits</div>
            )}

            {SubscribeNow === "Rebalance Now" && (
              <div>
                <div
                  className="to-continue-subscription"
                  onClick={handleToContinueSubscribe}
                >
                  click to continue subscription
                </div>
              </div>
            )}
          </div>
          <hr className="horizontal-line-one-equity-sidebar" />

          {/* buttons */}
          <div className="buttons">
            <button className="subscribe-now" onClick={handleSubscribe}>
              {SubscribeNow}
            </button>
            {SubscribeNow === "Rebalance Now" && (
              <button
                variant="contained"
                className="square-of-strategy"
                onClick={handleClickOpen}
              >
                Exit Strategy
              </button>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              disableScrollLock={true}
            >
              <DialogTitle id="alert-dialog-title">
                {"Confirm Exit Strategy"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to exit this strategy? This action
                  cannot be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleConfirm} color="secondary" autoFocus>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <PlansBenefitsPopup isOpen={isPopupOpen} onClose={closePopup} />

          <RebalancePopup
            isOpen={isRebalancePopupOpen}
            onClose={closeRebalancePopup}
          />
        </div>
      </div>
     {isInTimeRange && <StockTable />}

      {isAuthenticationPopupVisible && (
        <AuthenticationPopup closePopup={closePopup} />
      )}
    </div>
  );
};

export default AboutEquity;

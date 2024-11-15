import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./PlansBenefitsPopup.css";
import OutsideClickHandler from "react-outside-click-handler";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  SUBSCRIPTIONFEES,
  generatePaymentLink,userBrokerDetails
} from "../../../utils/api_utils";

const PlansBenefitsPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(true); // Initialize loading state
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState(null); // State to track selected subscription

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const strategyId = localStorage.getItem("strategyId");

        const response = await callAxiosApi(getStrategy, {
          table: SUBSCRIPTIONFEES,
          filters: {
            // strategyId: strategyId,
          },
        });

        if (response.data.errorStatus === false) {
          setSubscriptionList(response.data.data); // Update insights with fetched data
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

  // useEffect(() => {
  //   if (selectedSubscription) {
  //     console.log("Selected Subscription updated:", selectedSubscription.subscriptionFeeId);
  //   }
  // }, [selectedSubscription]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSubscriptionClick = debounce((subscription) => {
    setSelectedSubscription(subscription);
  }, 300);

  const handlePayNowClick = async () => {
    try {
      const userId = localStorage.getItem("equity_user_id")
      const getUserBroker = await callAxiosApi(userBrokerDetails, {
        userId: userId
      });
    
      console.log("getUserBroker =", getUserBroker.data.data);
      const userBrokerId = getUserBroker.data.data.filter((item) => item.isPrimary === true)
      console.log("userBrokerId",userBrokerId[0].brUrPkid);

      localStorage.setItem("userBrokerId", userBrokerId[0].brUrPkid); 
      
      // console.log(
      //   "handlePayNowClick selectedSubscription",
      //   selectedSubscription
      // );
      // ₹{data.price} for {data.period}
      if (selectedSubscription) {
        localStorage.setItem(
          "strategyAmount",
          Number(selectedSubscription.price)
        );

        const customerName = localStorage.getItem("equity_user_name");
        const customerEmail = localStorage.getItem("equity_user_email");
        const customerContact =
          localStorage.getItem("equity_user_mobile");

        const response = await callAxiosApi(generatePaymentLink, {
          amount: Number(selectedSubscription.price),
          customerName: customerName,
          customerEmail: customerEmail,
          customerContact: customerContact,
          description: "Payment for Subscription",
          // callbackUrl: "http://localhost:8086/payment-success",
          callbackUrl: "http://27.116.52.24:8086/payment-success",
        });

        console.log("generatePaymentLink", response);
        console.log("generatePaymentLink", response?.data?.success);

        if (response?.data?.success) {
          window.location.href = response.data.paymentLink;
          // navigate(response.data.paymentLink);

          // Handle the Razorpay callback
        }

        // toast.success(
        //   <>
        //     You have successfully
        //     <br /> subscribed to the ₹{selectedSubscription.price} plan
        //     <br />
        //     for the {selectedSubscription.period} period.
        //   </>
        // );
        // onClose();

        // setTimeout(() => {
        //   onClose();
        // }, 2000);
        // Add your payment logic here
      } else {
        toast.error("No subscription selected !");
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  if (!isOpen) return null;

  return (
    <div className="PlansBenefitsPopup-overlay">
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className="PlansBenefitsPopup-content">
          <div className="PlansBenefitsPopup-header"></div>
          <div className="PlansBenefitsPopup-body">
            <div className="PlansBenefitsPopup-plan">
              <div className="plan-title">Plans & Benefits</div>
              <div className="status-dots">
                {/* <span className="plandot green"></span>
                <span className="plandot yellow"></span> 
                <span className="plandot red" onClick={onClose}> </span> */}
                <img
                  src="white-cross-red-background.png"
                  onClick={onClose}
                  className="closeBtnStyle"
                />
              </div>
            </div>
            {/* <div>
              <hr className="horizontal-line-PlansBenefitsPopup" />
            </div> */}
            <div className="image-text-container">
              <img
                src="plans-and-benefit.png"
                alt="Description"
                className="popup-image"
              />
              <div className="popup-text">
                <div className="get-access-to-blue-text">
                  Get access to constituents & rebalance updates
                </div>
                <div className="get-access-to-blue-text">
                  For{" "}
                  <span className="DiviGrowth-capital">DiviGrowth capital</span>
                </div>
                <div className="benefit-of-subscribing-gray-text">
                  Benefit of subscribing to this equity case
                </div>
                {/*  */}
                <div className="plans-benefit-right-side-third-part-container">
                  <div className="plans-benefit-right-side-third-part">
                    <img
                      src="three-blue-tick.png"
                      alt="Description"
                      className="plans-benefit-right-side-third-part-icon"
                    />
                    <span>Undervalued stocks with sound</span>
                  </div>
                  <div className="plans-benefit-right-side-third-part">
                    <img
                      src="three-pink-bar.png"
                      alt="Description"
                      className="plans-benefit-right-side-third-part-icon"
                    />
                    <span>Undervalued stocks with sound</span>
                  </div>
                  <div className="plans-benefit-right-side-third-part">
                    <img
                      src="green-left-right-arrow.png"
                      alt="Description"
                      className="plans-benefit-right-side-third-part-icon"
                    />
                    <span>Undervalued stocks with sound</span>
                  </div>
                </div>

                <div className="benefit-of-subscribing-gray-text">
                  Benefit of subscribing to this equity case
                </div>

                {/* using map() */}
                <div className="month-year-price">
                  {subscriptionList.map((data, index) => (
                    <div
                      key={index}
                      className={`circle-container ${
                        selectedSubscription?.subscriptionFeeId ===
                        data.subscriptionFeeId
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleSubscriptionClick(data)}
                    >
                      <div className="circle-container-content-wrapper">
                        <div className="circle month-year-price-dot-blue"></div>
                        <div className="text">
                          ₹{data.price} for {data.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="plans-benefit-right-side-third-part-Subscribe-now">
                  <button
                    className="plans-benefit-right-side-third-part-Subscribe-now-btn"
                    onClick={handlePayNowClick}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default PlansBenefitsPopup;

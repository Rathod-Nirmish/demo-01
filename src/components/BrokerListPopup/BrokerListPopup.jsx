import React, { useState, useRef, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import styles from "./BrokerListPopup.module.css";
import BrokerFormPopup from "./BrokerFormPopup"; // Import the popup component
import BrokerEditPopup from "./BrokerEditPopup"; // Import the popup component
import OutsideClickHandler from "react-outside-click-handler";
import CircularProgress from "@mui/material/CircularProgress";

import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USERBROKER,
  userBrokerDetails,
} from "../../utils/api_utils";

const BrokerListPopup = ({ closeBrokerPopup }) => {
  const [showAddBrokerPopup, setShowAddBrokerPopup] = useState(false);
  const [showEditBrokerPopup, setShowEditBrokerPopup] = useState(false);
  const [brokerToEdit, setBrokerToEdit] = useState(null); // State to track the broker to edit
  const [brokerList, setBrokerList] = useState([
    {
      name: "Grow plus",
      description: "description",
      icon: "icon",
      category: "category",
      volatility: "volatility",
      type: "type",
      cagr: "12",
      minInvestment: "minInvestment",
    },
  ]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Initialize loading state
  const popupRef = useRef(null); // Create a ref for the popup container

  const brokers = [
    { id: 1, name: "Angel One", userId: "ANG1234567", primary: true },
    { id: 2, name: "Groww", userId: "1234567890", primary: false },
    { id: 3, name: "AxisDirect", userId: "AX12345678", primary: false },
  ];

  const handleAddBrokerClick = () => {
    setShowAddBrokerPopup(true);
    setBrokerToEdit(null); // Ensure no broker is selected for editing when adding a new one
  };

  const handleEditBrokerClick = async (broker) => {
    console.log("edit broker :", broker);
    let userBrokerData;

    // for edit purpose to get perticular
    const getDataBybrUrPkid = await callAxiosApi(getStrategy, {
      table: USERBROKER,
      filters: { brUrPkid: broker.brUrPkid },
    });

    if (getDataBybrUrPkid.data.errorStatus === false) {
      userBrokerData = { ...broker, ...getDataBybrUrPkid.data.data[0] };
    }
    console.log("userBrokerData object :", userBrokerData);

    setBrokerToEdit(userBrokerData); // Set the broker to be edited
    setShowEditBrokerPopup(true); // Show the popup
  };

  const handleStarClick = (brokerId) => {
    console.log(brokerId);
  };

  const closePopup = () => {
    console.log("closePopup");

    setShowAddBrokerPopup(false);
    setShowEditBrokerPopup(false);
    setBrokerToEdit(null); // Reset the brokerToEdit state when closing the popup
    closeBrokerPopup();
  };

  useEffect(() => {
    const fetchStrategies = async () => {
      // try {
      //   console.log("loading =", loading);
      //   const token = localStorage.getItem("authToken");
      //   const decodedToken = jwtDecode(token); // Use jwtDecode to decode the token
      //   console.log("User ID:", decodedToken.id); // Access 'id' from token

      //   // for edit purpose
      //   // const response = await callAxiosApi(getStrategy, {
      //   //   table: USERBROKER,
      //   //   filters: { userId: decodedToken.id },
      //   // });

      //   // new response
      //   const getUserBroker = await callAxiosApi(userBrokerDetails, {
      //     userId: decodedToken.id,
      //   });
      //   // console.log("BrokerListPopup =", response.data);
      //   console.log("getUserBroker =", getUserBroker.data);
      //   console.log("getUserBroker =", getUserBroker.data.data);

      //   if (getUserBroker.data.data) {
      //     console.log("call all BrokerList data");
      //     // setBrokerList(response.data.data); // Update insights with fetched data
      //     setBrokerList(getUserBroker.data.data); // Update insights with fetched data
      //     setLoading(false);
      //     // console.log("BrokerList data =", response.data.data);
      //   } else {
      //     console.log("not get BrokerList data");
      //     setLoading(false);
      //   }
      // } catch (e) {
      //   console.log("loading =", loading);
      //   console.log("API Not Fetched");
      // } finally {
      //   console.log("loading =", loading);

      //   setLoading(false); // Stop loading once the data is fetched or an error occurs
      // }

        setLoading(false); // Stop loading once the data is fetched or an error occurs

    };
    fetchStrategies();
  }, []);

  if (loading) {
    console.log("Loader should display now");
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <div className={styles.brokerListContainer}>
          {brokerList.map((broker) => (
            <div key={broker.id} className={styles.brokerItem}>
              <div className={styles.brokerIconContainer}>
                <span
                  className={`${styles.starIcon} ${
                    broker.isPrimary ? styles.primaryStar : ""
                  }`}
                  onClick={() => handleStarClick(broker.id)}
                >
                  ☆
                </span>
              </div>
              <div className={styles.profileIcon}>
                <img src={broker.profile} alt={broker.profile} />
              </div>
              <div className={styles.brokerDetails}>
                <h3 className={styles.brokerName}>{broker.brokerName}</h3>
                {broker.isPrimary && (
                  <p className={styles.primaryAccount}>Primary Account</p>
                )}
              </div>
              <div className={styles.brokerUserId}>
                <p className={styles.userId}>User ID:</p>
                <p className={styles.userIdBelow}>{broker.brokerUserId}</p>
              </div>
              <button
                className={styles.editButton}
                onClick={() => handleEditBrokerClick(broker)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.addBrokerButton}
            onClick={handleAddBrokerClick}
          >
            Add Broker
          </button>
          <div className={styles.closeButton} onClick={closeBrokerPopup}>
            Close
          </div>
        </div>
      </div>

      {showAddBrokerPopup && (
        <BrokerFormPopup closePopup={closePopup} brokerToEdit={brokerToEdit} />
      )}
      {showEditBrokerPopup && (
        <BrokerEditPopup closePopup={closePopup} brokerToEdit={brokerToEdit} />
      )}
    </div>
  );
};

export default BrokerListPopup;

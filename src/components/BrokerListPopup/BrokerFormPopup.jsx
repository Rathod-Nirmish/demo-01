import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import styles from "./BrokerFormPopup.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USERBROKER,
  BROKERS,
  insertData,
} from "../../utils/api_utils";

const BrokerFormPopup = ({ closePopup, brokerToEdit }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    broker: "",
    userId: "",
    password: "",
    apiKey: "",
    apiSecret: "",
    totp: "",
    isPrimary: false,
  });
  //   const [brokerDropdownList, setBrokerDropdownList] = useState([
  //     {
  //         "brokerId": 1,
  //         "name": "Kite",
  //         "icon": "kiteimage.jpg",
  //         "createdAt": "2024-09-06T16:03:33.582Z",
  //         "updatedAt": "2024-09-06T16:03:33.582Z"
  //     },
  //     {
  //         "brokerId": 2,
  //         "name": "Groww",
  //         "icon": "Growwimage.jpg",
  //         "createdAt": "2024-09-06T16:52:29.583Z",
  //         "updatedAt": "2024-09-06T16:52:29.583Z"
  //     }
  // ])
  const [brokerDropdownList, setBrokerDropdownList] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Effect to populate form when editing a broker
  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await callAxiosApi(getStrategy, { table: BROKERS });

        if (response.data.errorStatus === false) {
          console.log("setBrokerDropdownList",response.data.data );
          
          setBrokerDropdownList(response.data.data); // Update insights with fetched data
        } else {
        }
      } catch (e) {
        console.log("API Not Fetched");
      } finally {
        setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();

    // *
    if (brokerToEdit) {
      setFormData({
        broker: brokerToEdit.name.toLowerCase(),
        userId: brokerToEdit.userId,
        password: "", // You may want to handle passwords differently
        apiKey: "",
        apiSecret: "",
        totp: "",
        isPrimary: brokerToEdit.primary,
      });
    }
  }, [brokerToEdit]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.broker) newErrors.broker = "Please select a broker.";
    if (!formData.userId) newErrors.userId = "User ID is required.";
    if (!formData.password && !brokerToEdit) {
      newErrors.password = "Password is required.";
    }
    if (!formData.apiKey) newErrors.apiKey = "API Key is required.";
    if (!formData.apiSecret) newErrors.apiSecret = "API Secret is required.";
    if (!formData.totp) newErrors.totp = "TOTP is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    try {
      // setLoading(true);
      e.preventDefault();
      console.log("Form data submitted:", formData.broker);

      const formErrors = validate();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
        // Submit data (e.g., store in database, send to API, etc.)
        console.log("Form data submitted:", formData);

        const token = localStorage.getItem("authToken");
        const decodedToken = jwtDecode(token); // Use jwtDecode to decode the token
        console.log("User ID:", decodedToken.id); // Access 'id' from token

        // send to api
        const response = await callAxiosApi(insertData, {
          table: USERBROKER,
          brokerId: formData.broker,
          brokerUserId: formData.userId,
          brokerPassword: formData.password,
          brokerApiKey: formData.apiKey,
          brokerApiSecrect: formData.apiSecret,
          totp: formData.totp,
          isPrimary: formData.isPrimary,
          userId: decodedToken.id, // Access 'id' from token
          emailOtp: 7890,
          PhoneOtp: 4567,
          profile: "3.jpg",
        });

        if (response.data.errorStatus === false) {
          // If the response is successful, update the state with the new data
          console.log("response.data.data.msg", response.data);

          toast.success("userBroker data inserted successfully.");
          // setLoading(false);
          // Delay popup closing by 500ms to allow toast to show
          setTimeout(() => {
            closePopup();
          }, 2000);
          // closePopup();
        } else {
          console.log("error true", response);
          console.log("error true", response.data.msg);
          setLoading(false);
          toast.error("Something went wrong !");
        }
        // broker: "",
        // userId: "",
        // password: "",
        // apiKey: "",
        // apiSecret: "",
        // totp: "",
        // isPrimary: false,
        // Reset form or close popup
        // closePopup();
      }
    } catch (error) {
      console.log("add broker error :", error);
    }
  };

  if (loading) {
    console.log("Loader should display now");
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.formOverlay}>
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
      <div className={styles.formContent}>
        <h2 className={styles.addBrokerHeader}>
          {brokerToEdit ? "Edit Broker" : "Add Broker"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.divInputField}>
            {/* <label>Select Broker</label> */}
            {/* <select
              name="broker"
              value={formData.broker}
              onChange={handleChange}
            >
              <option value="">--Select Broker--</option>
              <option value="angel">Angel One</option>
              <option value="groww">Groww</option>
              <option value="axis">AxisDirect</option>
             
            </select> */}
            <select
              name="broker"
              value={formData.broker}
              onChange={handleChange}
              className={styles.selectInputField}
            >
              <option value="">Select Broker</option>
              {brokerDropdownList.map((broker) => (
                <option key={broker.brokerId} value={broker.brokerId}>
                  {" "}
                  {/*on selecting option :- value data pass*/}
                  {broker.name}
                </option>
              ))}
            </select>
            {errors.broker && <p className={styles.error}>{errors.broker}</p>}
          </div>
          <div  className={styles.divInputField}>
            <input
              type="text"
              name="userId"
              placeholder="Broker User ID"
              className={styles.inputField}
              value={formData.userId}
              onChange={handleChange}
            />
            {errors.userId && <p className={styles.error}>{errors.userId}</p>}
          </div>
          <div className={styles.divInputField}>
            <input
              type="password"
              name="password"
              placeholder="Broker Password"
              className={styles.inputField}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <div className={styles.divInputField}>
            <input
              type="text"
              name="apiKey"
              placeholder="Broker API Key"
              className={styles.inputField}
              value={formData.apiKey}
              onChange={handleChange}
            />
            {errors.apiKey && <p className={styles.error}>{errors.apiKey}</p>}
          </div>
          <div className={styles.divInputField}>
            <input
              type="text"
              name="apiSecret"
              placeholder="Broker API Secret"
              className={styles.inputField}
              value={formData.apiSecret}
              onChange={handleChange}
            />
            {errors.apiSecret && (
              <p className={styles.error}>{errors.apiSecret}</p>
            )}
          </div>
          <div className={styles.divInputField}>
            <input
              type="text"
              name="totp"
              placeholder="Broker TOTP"
              className={styles.inputField}
              value={formData.totp}
              onChange={handleChange}
            />
            {errors.totp && <p className={styles.error}>{errors.totp}</p>}
          </div>
          <div className={styles.checkboxStyle}>
            <input
              type="checkbox"
              name="isPrimary"
              checked={formData.isPrimary}
              onChange={handleChange}
            />{" "}
            Set as primary account
          </div>
          <div className={styles.submitButton}>
            <button type="submit" className={styles.submitButtonBtn}>
              {brokerToEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
        <button className={styles.closeButton} onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BrokerFormPopup;

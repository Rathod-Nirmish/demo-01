import React, { useEffect, useState } from "react";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";

import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USERBROKER,
  updateData,
} from "../../utils/api_utils";

import styles from "./BrokerEditPopup.module.css";

const BrokerEditPopup = ({ closePopup, brokerToEdit }) => {
  const [loading, setLoading] = useState(false); // Initialize loading state

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

  const [editMode, setEditMode] = useState({
    apiKey: false,
    password: false,
    // phoneNumber: false,
    // email: false,
    // panCard: false,
    // aadharNumber: false,
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});
  const [brUrPkid, setBrUrPkid] = useState(null);

  // Effect to populate form when editing a broker
  useEffect(() => {
    if (brokerToEdit) {
      setBrUrPkid(brokerToEdit.brUrPkid);
      setFormData({
        broker: brokerToEdit.brokerName,
        userId: brokerToEdit.brokerUserId,
        password: brokerToEdit.brokerPassword, // You may want to handle passwords differently
        apiKey: brokerToEdit.brokerApiKey,
        apiSecret: brokerToEdit.brokerApiSecrect,
        totp: brokerToEdit.totp,
        isPrimary: brokerToEdit.isPrimary,
      });
    }
  }, [brokerToEdit]);

  const handleEditClick = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

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
    if (!formData.password) {
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
      e.preventDefault();
      console.log("formData", formData);

      const formErrors = validate();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
        setLoading(true);

        // Submit data (e.g., store in database, send to API, etc.)
        const response = await callAxiosApi(updateData, {
          table: USERBROKER,
          id: brUrPkid,
          brokerName: formData.broker,
          brokerUserId: formData.userId,
          brokerPassword: formData.password,
          brokerApiKey: formData.apiKey,
          brokerApiSecrect: formData.apiSecret,
          totp: formData.totp,
          isPrimary: formData.isPrimary,
        });
        console.log("response.data", response.data);

        if (response.data.errorStatus === false) {
          // setInsights(response.data.data); // Update insights with fetched data
          console.log("insights =", response.data);
          setLoading(false);

          // toast.success("Strategy fetch successful!");
        } else {
          console.log("not get getStrategy data");
          setLoading(false);
        }

        // Reset form or close popup
        closePopup();
      }
    } catch (e) {
      // toast.error("Strategy fetch failed, please try again.");
      setLoading(false);

      console.log("API Not Fetched");
    } finally {
      setLoading(false); // Stop loading once the data is fetched or an error occurs

      // closePopup();
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContent}>
        <h2 className={styles.editBrokerHeader}>Edit Broker</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Select Broker</label> */}
            <select
              name="broker"
              className={styles.selectInputField}
              value={formData.broker}
              onChange={handleChange}
              readOnly // Prevents the user from selecting other options
            >
              <option value={formData.broker}>{formData.broker}</option>
              {/* <option value="angel">Angel One</option>
              <option value="groww">Groww</option>
              <option value="axis">AxisDirect</option> */}
              {/* Add more options as needed */}
            </select>
            {errors.broker && <p className={styles.error}>{errors.broker}</p>}
          </div>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="Broker User ID"
              className={styles.inputField}
              value={formData.userId}
              disabled={!editMode.userId}
              onChange={handleChange}
            />
            {errors.userId && <p className={styles.error}>{errors.userId}</p>}
          </div>
          <div className={styles.profileDetail}>
            <input
              type="text"
              name="password"
              placeholder="Broker Password"
              className={styles.inputField}
              // disabled={!editMode.password}
              value={formData.password}
              onChange={handleChange}
            />
            {/* <FaEdit
              className={styles.editIcon}
              onClick={() => handleEditClick("password")}
            /> */}
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <div className={styles.profileDetail}>
            <input
              type="text"
              name="apiKey"
              placeholder="Broker API Key"
              className={styles.inputField}
              // disabled={!editMode.apiKey}
              value={formData.apiKey}
              onChange={handleChange}
            />
            {/* <FaEdit
              className={styles.editIcon}
              onClick={() => handleEditClick("apiKey")}
            /> */}
          </div>
          {errors.apiKey && <p className={styles.error}>{errors.apiKey}</p>}
          <div className={styles.profileDetail}>
            <input
              type="text"
              name="apiSecret"
              placeholder="Broker API Secret"
              className={styles.inputField}
              // disabled={!editMode.apiSecret}
              value={formData.apiSecret}
              onChange={handleChange}
            />
            {/* <FaEdit
              className={styles.editIcon}
              onClick={() => handleEditClick("apiSecret")}
            /> */}
          </div>
          {errors.apiSecret && (
            <p className={styles.error}>{errors.apiSecret}</p>
          )}
          <div className={styles.profileDetail}>
            <input
              type="text"
              name="totp"
              placeholder="Broker TOTP"
              className={styles.inputField}
              // disabled={!editMode.totp}
              value={formData.totp}
              onChange={handleChange}
            />
            {/* <FaEdit
              className={styles.editIcon}
              onClick={() => handleEditClick("totp")}
            /> */}
          </div>
          {errors.totp && <p className={styles.error}>{errors.totp}</p>}
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

export default BrokerEditPopup;

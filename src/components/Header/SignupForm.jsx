import React, { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";

import OutsideClickHandler from "react-outside-click-handler";
import styles from "./SignupForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  callAxiosApi,
  insertData,
  USER,
  registerUser,
  verifyPanAndSendOtp,
} from "../../utils/api_utils";

const SignupForm = ({ closeAllPopup, closePopup, onContinue }) => {
  // const [loading, setLoading] = useState(false); // Initialize loading state
  const datePickerRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    panCard: "",
    birthDate: "", // Initialize with a Day.js object (current date),
    // birthDate: dayjs(), // Initialize with a Day.js object (current date),
    // aadharNumber: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message as user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.panCard) newErrors.panCard = "PAN Card is required";
    if (!formData.birthDate) newErrors.birthDate = "Birth Date is required";
    // if (!formData.aadharNumber)
    //   newErrors.aadharNumber = "Aadhar Number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length !== 6) {
      newErrors.username = "Username must be exactly 6 characters long";
    }
    //  else {
    //   const firstThreeChars = formData.username.slice(0, 3);
    //   const lastThreeChars = formData.username.slice(3, 6);

    //   // Check if the first 3 characters are unique (no repeating characters)
    //   const firstThreeUnique = new Set(firstThreeChars).size === 3;

    //   // Check if the last 3 characters are unique numbers
    //   const lastThreeAreNumbers = /^[0-9]{3}$/.test(lastThreeChars);
    //   const lastThreeUnique = new Set(lastThreeChars).size === 3;

    //   if (!firstThreeUnique) {
    //     newErrors.username = "The first 3 characters must be unique letters";
    //   }
    //   if (!lastThreeAreNumbers) {
    //     newErrors.username = "The last 3 characters must be numbers";
    //   } else if (!lastThreeUnique) {
    //     newErrors.username = "The last 3 numbers must be unique";
    //   }
    // }

    // Password validation: at least 10 characters, must include letter, number, and special character
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 10 characters long and include a letter, number, and special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleContinue = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    let response;
    try {
      console.log("formData", formData);

      const date = new Date(formData.birthDate);

      const birthDate = date.toLocaleDateString("en-GB");

      console.log("birthDate", birthDate);

      // return date.toLocaleDateString('en-GB'); // 'en-GB' formats as 'dd/mm/yyyy'

      // setLoading(true);
      response = await callAxiosApi(verifyPanAndSendOtp, {
        // table: USER,
        name: formData.fullName,
        mobile: formData.phoneNumber,
        email: formData.email,
        userName: formData.username,
        password: formData.password,
        // aadhar: formData.aadharNumber,
        dob: birthDate,
        pan: formData.panCard,
        // isMaster: false,
      });
      console.log("response =>", response);

      if (response?.status === 201) {
        console.log("call onSigninClick");
        // toast.success("Login successful!");

        console.log("response 201 =", response?.data?.token);
        // localStorage.setItem("equity_refreshToken", response.data.refreshToken); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value
        localStorage.setItem("name", formData.fullName);
        localStorage.setItem("mobile", formData.phoneNumber);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("userName", formData.username);
        localStorage.setItem("password", formData.password);
        localStorage.setItem("dob", birthDate);
        localStorage.setItem("pan", formData.panCard);
        // localStorage.setItem("isMaster", false);

        // const token = response?.data?.token;
        // localStorage.setItem("authToken", token);

        onContinue();
      } else {
        console.log("try again", response?.response?.data?.message);
        // setLoading(false);

        // Show error toast
        toast.error(response?.response?.data?.message);
      }

      // onContinue();
    } catch (e) {
      console.log("API Not Fetched", e);
      console.log("API Not response", response);
      // setLoading(false);

      // setErrors({
      //   apiError: "There was an issue with the signup. Please try again.",
      // });
    }
  };

  // Get today's date in 'YYYY-MM-DD' format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // if (loading) {
  //   console.log("Loader should display now");
  //   return (
  //     <div className="loader-container">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  return (
    <div className={styles.popupOverlay}>
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
      {/* <OutsideClickHandler onOutsideClick={closeAllPopup}> */}
      <OutsideClickHandler
        onOutsideClick={(event) => {
          // Check if the click is outside the DatePicker
          console.log(" datePickerRef.current", datePickerRef?.current);
          console.log(" event.target", event.target);

          if (
            datePickerRef.current &&
            datePickerRef.current.contains(event.target)
          ) {
            return; // Don't call closeAllPopup if the click is inside the DatePicker
          }
          closeAllPopup();
        }}
      >
        <div className={styles.popupContent}>
          <div>
            <img
              className={styles.createProfileImageDiv}
              src="./create-profile-icon.png"
              style={{ display: "inline" }}
              alt="Profile Icon"
            />
          </div>
          <h2>Create your profile</h2>
          <p className={styles.subHeaderText}>Enter Detail as per PAN card</p>
          <form>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={styles.inputField}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className={styles.errorText}>{errors.fullName}</p>
            )}

            <input
              type="text"
              name="panCard"
              placeholder="PAN Card"
              className={styles.inputField}
              value={formData.panCard}
              onChange={handleChange}
            />
            {errors.panCard && (
              <p className={styles.errorText}>{errors.panCard}</p>
            )}

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Birth Date"
                value={formData.birthDate}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="birthDate"
                    placeholder="Birth Date"
                    className={styles.inputField}
                    error={Boolean(errors.birthDate)}
                    helperText={errors.birthDate || ""}
                    inputRef={datePickerRef} // Attach the ref to the DatePicker
                  />
                )}
                views={["year", "month", "day"]} // Allow selection of year, month, and day
                disableFuture // Disable future dates
              />
            </LocalizationProvider> */}

            <input
              type="date"
              name="birthDate"
              placeholder="Birth Date"
              className={styles.inputField}
              value={formData.birthDate} // Show today's date if no value is set}
              onChange={handleChange}
            />
            {errors.birthDate && (
              <p className={styles.errorText}>{errors.birthDate}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className={styles.inputField}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className={styles.inputField}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className={styles.errorText}>{errors.phoneNumber}</p>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.inputField}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className={styles.errorText}>{errors.username}</p>
            )}

            <div className={styles.inputFieldContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={styles.inputField}
                value={formData.password}
                onChange={handleChange}
                onCopy={(e) => e.preventDefault()} // Disable copy
                onPaste={(e) => e.preventDefault()} // Disable paste
              />
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}

            <div className={styles.inputFieldContainer}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className={styles.inputField}
                value={formData.confirmPassword}
                onChange={handleChange}
                onCopy={(e) => e.preventDefault()} // Disable copy
                onPaste={(e) => e.preventDefault()} // Disable paste
              />
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className={styles.errorText}>{errors.confirmPassword}</p>
            )}

            <button
              type="button"
              className={styles.continueButton}
              onClick={handleContinue}
            >
              Continue
            </button>
            {errors.apiError && (
              <p className={styles.errorText}>{errors.apiError}</p>
            )}

            <p className={styles.signInText}>
              Already have an account?{" "}
              <span onClick={closePopup} className={styles.signInLink}>
                Sign in
              </span>
            </p>
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SignupForm;

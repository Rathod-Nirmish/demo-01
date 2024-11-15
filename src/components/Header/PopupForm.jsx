import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUser } from "../../context/UserContext";
import OutsideClickHandler from "react-outside-click-handler";
import SignupForm from "./SignupForm"; // Import the SignupForm

// import './PopupForm.css';
import styles from "./PopupForm.module.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  loginApi,
} from "../../utils/api_utils";

const PopupForm = ({ closePopup, onSignupClick, onSigninClick }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showSignupForm, setShowSignupForm] = useState(false); // State to toggle SignupForm

  const [error, setError] = useState("");
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const { setUserPhoneNumber } = useUser();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
  };

  const handleSignIn = async () => {
    let response;
    if (username.trim() === "" || password.trim() === "") {
      setError("Please fill in both fields.");
      return;
    }
    console.log(username, password);

    try {
      response = await callAxiosApi(loginApi, {
        userName: username,
        password: password,
      });

      if (response.data.errorStatus === false) {
        console.log("call onSigninClick");
        toast.success("Login successful!");

        // Store the token in localStorage
        const token = response.data.data.token;
        localStorage.setItem("authToken", token); // 'authToken' is the key, and 'token' is the value
        localStorage.setItem("equity_refreshToken", response.data.data.refreshToken); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value
        localStorage.setItem("equity_user_id", response.data.data.id); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value
        localStorage.setItem("equity_user_name", response.data.data.name); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value
        localStorage.setItem("equity_user_mobile", response.data.data.mobile); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value
        localStorage.setItem("equity_user_email", response.data.data.email); // 'authresponse.data.data.' is the key, and 'response.data.data.' is the value

        // Show success toast
        setTimeout(() => {
          onSigninClick(); // This will trigger the OTPVerificationPopup
        }, 2000);
      } else {
        console.log("try again");
        // Show error toast
        toast.error(response.response.data.message);
      }
    } catch (e) {
      // console.log("API Not Fetched");
      toast.error(response.response.data.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div>
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
        <OutsideClickHandler onOutsideClick={closePopup}>
          <div className={styles.popupContent}>
            <div className={styles.popupHeader}>
              <span role="img" aria-label="wave" className={styles.waveEmoji}>
                👋
              </span>
              <p className={styles.welcomeText}>Welcome to Equitycase</p>
            </div>
            <h2 className={styles.headerText}>Sign in</h2>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown} // Attach keydown handler
            />
            <div className={styles.inputFieldContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.inputField}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={handleKeyDown} // Attach keydown handler
              />
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button className={styles.signInButton} onClick={handleSignIn}>
              Sign in
            </button>
            <p className={styles.signUpText}>
              Don’t have an account?{" "}
              <span onClick={onSignupClick} className={styles.signUpLink}>
                Sign up
              </span>
            </p>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default PopupForm;

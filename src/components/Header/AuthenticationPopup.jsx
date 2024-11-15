import React, { useState } from "react";
import PopupForm from "./PopupForm";
import SignupForm from "./SignupForm";
import { useNavigate, useLocation } from "react-router-dom";

import OTPVerificationPopup from "./OTPVerificationPopup";

const AuthenticationPopup = ({ closePopup }) => {
  const location = useLocation();

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowOTPVerification(false);

    // setShowSignupForm(false);
    // setShowOTPVerification(true);
  };

  const handleSigninClick = () => {
    console.log(showSignupForm, showOTPVerification);
    const currentPath = location.pathname;
    console.log("login location.pathname", location.pathname);
    console.log("login location.pathname", location.pathname.length);

    // false false -> home
    // true false -> close sign up
    if (!showSignupForm && !showOTPVerification) {
      if (location.pathname.length <= 1) {
        navigate("/home", { state: { showToast: true } });
      } else {
        // navigate(location.pathname)
        window.location.reload();
      }
    } else if (showSignupForm) {
      setShowSignupForm(false);
      setShowOTPVerification(false);
    } else {
      setShowSignupForm(false);
      setShowOTPVerification(false); // true
    }
  };

  const handleContinueClick = () => {
    setShowSignupForm(false);

    setShowOTPVerification(true);
  };

  const handleCloseAllPopup = () => {
    console.log("handleCloseAllPopup");
    
    setShowSignupForm(false);
    setShowOTPVerification(false);
    closePopup();
  };

  return (
    <div>
      {showSignupForm ? (
        <SignupForm
          closeAllPopup={handleCloseAllPopup}
          closePopup={handleSigninClick}
          onContinue={handleContinueClick}
        />
      ) : showOTPVerification ? (
        <OTPVerificationPopup
          closePopup={closePopup}
          phoneNumber={phoneNumber}
        />
      ) : (
        <PopupForm
          closePopup={closePopup}
          onSignupClick={handleSignupClick}
          onSigninClick={handleSigninClick}
        />
      )}
    </div>
  );
};

export default AuthenticationPopup;

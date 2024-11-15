import React, { useState, useEffect } from "react";
import OTPInput from "react-otp-input";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  callAxiosApi,
  insertData,
  USER,
  registerUser,
  verifyPanAndSendOtp,
  verifyOtpAndStoreData,
} from "../../utils/api_utils";
import "./OTPVerificationPopup.css";

const OTPVerificationPopup = ({ closePopup, phoneNumber, email }) => {
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  // useEffect(() => {
  //   if (phoneOtp.length === 4 && emailOtp.length === 4) {
  //     console.log("Phone OTP entered:", phoneOtp);
  //     console.log("Email OTP entered:", emailOtp);

  //     // Check both OTPs
  //     if (phoneOtp === "1234" && emailOtp === "5678") { // Replace with actual validation logic
  //       console.log("Both OTPs verified:", phoneOtp, emailOtp);
  //       setIsOtpVerified(true);
  //     } else {
  //       console.log("Please enter valid 4-digit OTPs.");
  //     }
  //   }
  // }, [phoneOtp, emailOtp]);

  const handleVerify = async () => {
    if (timer <= 0) {
      toast.error("Otp verification time expire!");
    } else {
      if (phoneOtp.length === 6 && emailOtp.length === 6) {
        console.log("Phone OTP entered:", phoneOtp);
        console.log("Email OTP entered:", emailOtp);

        // Retrieve data from localStorage
        const name = localStorage.getItem("name");
        const mobile = localStorage.getItem("mobile");
        const email = localStorage.getItem("email");
        const userName = localStorage.getItem("userName");
        const password = localStorage.getItem("password");
        const dob = localStorage.getItem("dob");
        const pan = localStorage.getItem("pan");

        console.log("localStorage :", name, mobile, email, userName, dob, pan);

        // Check both OTPs (replace with actual validation logic)
        const response = await callAxiosApi(verifyOtpAndStoreData, {
          // table: USER,
          name: name,
          mobile: mobile,
          email: email,
          userName: userName,
          password: password,
          // aadhar: formData.aadharNumber,
          dob: dob,
          pan: pan,
          isMaster: false,
          phoneOtp: phoneOtp,
          emailOtp: emailOtp,
        });
        console.log("Both OTPs response:", response);
        console.log("Both OTPs response:", response?.response);
        console.log("Both OTPs response:", response?.response?.data?.message);
        toast.error(response?.response?.data?.message);

        if (response?.status === 201) {
          toast.success("User registered successfully");

          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }

        // if (phoneOtp === "123456" && emailOtp === "123456") {
        //   console.log("Both OTPs verified:", phoneOtp, emailOtp);
        //   navigate("/home");
        // } else {
        //   // setError("Please enter valid 6-digit OTPs.");
        //   toast.error("Both OTPs must be 6 digits long!");
        // }
      } else {
        // setError("Both OTPs must be 6 digits long.");
        toast.error("Both OTPs must be 6 digits long!");
      }
    }
  };

  const handleResend = async () => {
    setPhoneOtp("");
    setEmailOtp("");
    // Retrieve data from localStorage
    const name = localStorage.getItem("name");
    const mobile = localStorage.getItem("mobile");
    const email = localStorage.getItem("email");
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    const dob = localStorage.getItem("dob");
    const pan = localStorage.getItem("pan");

    console.log("localStorage :", name, mobile, email, userName, dob, pan);

    const response = await callAxiosApi(verifyPanAndSendOtp, {
      name,
      mobile,
      email,
      userName,
      password,
      dob,
      pan,
      isMaster: false,
    });

    if (response?.status === 201) {
      toast.success("Otps are sent to your email and phone number");
      setTimer(60);
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  if (isOtpVerified) {
    console.log("Navigate to home");
    navigate("/home");
  }

  return (
    <div className="popup-overlay">
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
        <div className="otp-popup-content">
          <div className="otp-icon">
            <img
              src="./security-lock-icon.png"
              style={{ display: "inline" }}
              alt="Verify OTP"
            />
          </div>
          <h2 className="verify-otp-header">Verify OTP</h2>
          <p className="otp-sent-number">
            We have sent an OTP to your phone number
          </p>
          <OTPInput
            value={phoneOtp}
            onChange={setPhoneOtp}
            numInputs={6}
            separator={<span>-</span>}
            containerStyle="otp-container"
            inputStyle="otp-input"
            renderInput={(props) => <input {...props} />}
          />
          <p className="otp-sent-number">
            We have sent an OTP to your Email ID
          </p>
          <OTPInput
            value={emailOtp}
            onChange={setEmailOtp}
            numInputs={6}
            separator={<span>-</span>}
            containerStyle="otp-container"
            inputStyle="otp-input"
            renderInput={(props) => <input {...props} />}
          />
          <p className="resend-text">Verify OTP in {timer} sec</p>
          <button className="verify-button" onClick={handleVerify}>
            Verify
          </button>
          <p className="resend-text-bottom">
            <a
              href="#"
              className={`resend-link ${timer > 0 ? "disabled" : ""}`}
              onClick={handleResend}
            >
              Resend OTP {timer > 0 && `(${timer}s)`}
            </a>
          </p>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default OTPVerificationPopup;

// import React, { useState, useEffect } from "react";
// import OTPInput from "react-otp-input";
// import OutsideClickHandler from "react-outside-click-handler";
// import ProfileCreationForm from "./ProfileCreationForm";
// import { useNavigate } from "react-router-dom";

// import "./OTPVerificationPopup.css";

// const OTPVerificationPopup = ({ closePopup, phoneNumber }) => {
//   const [otp, setOtp] = useState("");
//   const [timer, setTimer] = useState(52);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }
//   }, [timer]);

//   useEffect(() => {
//     if (otp.length === 4) {
//       console.log("OTP entered:", otp, typeof otp);
//       if (otp === "1234") {
//         console.log("OTP verified:", otp);
//         setIsOtpVerified(true);
//       } else {
//         console.log("Please enter a valid 4-digit OTP.");
//       }
//     }
//   }, [otp]);

//   if (isOtpVerified) {
//     console.log('navigate to home');

//     navigate("/home");
//     // return <ProfileCreationForm closePopup={closePopup} />;
//   }

//   return (
//     <div className="popup-overlay">
//       <OutsideClickHandler onOutsideClick={closePopup}>
//         <div className="otp-popup-content">
//           <div className="otp-icon">
//             <img src="./security-lock-icon.png" alt="Verify OTP" />
//           </div>
//           <h2>Verify OTP</h2>
//           <p className="otp-sent-number">OTP sent to +91 {phoneNumber}</p>
//           <OTPInput
//             value={otp}
//             onChange={setOtp}
//             numInputs={4}
//             separator={<span>-</span>}
//             containerStyle="otp-container"
//             inputStyle="otp-input"
//             renderInput={(props) => <input {...props} />}
//           />
//           <p className="resend-text">Resend OTP in {timer} sec</p>
//         </div>
//       </OutsideClickHandler>
//     </div>
//   );
// };

// export default OTPVerificationPopup;

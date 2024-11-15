import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./ProfilePopup.module.css";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";

// import jwt_decode from "jwt-decode";
// import jwt from "jsonwebtoken";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USER,
  updateData,
} from "../../utils/api_utils";

const ProfilePopup = ({ closePopup }) => {
  // const [loading, setLoading] = useState(true); // Initialize loading state
  const [name, setName] = useState(null); // Initialize loading state
  const [userId, setUserId] = useState(null); // Initialize loading state

  const navigate = useNavigate();
  const initialValues = {
    username: "tirthpatel123",
    password: "tirthpatel123",
    phoneNumber: "+91 98765 43210",
    email: "tirthpatel123@gmail.com",
    panCard: "ABCDE1234F",
    dob: "9898 7676 5454 3232",
  };

  const [editMode, setEditMode] = useState({
    username: false,
    password: false,
    phoneNumber: false,
    email: false,
    panCard: false,
    dob: false,
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
    panCard: "",
    dob: "",
  });
  // const [formData, setFormData] = useState({
  //   username: initialValues.username,
  //   password: initialValues.password,
  //   phoneNumber: initialValues.phoneNumber,
  //   email: initialValues.email,
  //   panCard: initialValues.panCard,
  //   dob: initialValues.dob,
  // });

  const [profilePicture, setProfilePicture] = useState(
    "/create-profile-icon.png"
  );

  // Use useRef to reference the file input element
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {

        // Fetch the token from localStorage
        const token = localStorage.getItem("authToken");
        let decodedToken;
        if (token) {
          // Decode the JWT token using jwt-decode
          decodedToken = jwtDecode(token); // Use jwtDecode to decode the token

          // Now you can access the values from the decoded token
          console.log("Decoded Token:", decodedToken);
          console.log("User ID:", decodedToken.id); // Access 'id' from token
          // console.log("Token Expiration:", decodedToken.exp); // Access 'exp' (expiry)

          const response = await callAxiosApi(getStrategy, {
            table: USER,
            filters: { userId: decodedToken.id },
          });
          console.log("user data =", response.data);

          if (response.data.errorStatus === false) {
            console.log("call all getStrategy");
            // setInsights(response.data.data); // Update insights with fetched data
            console.log("user data : =", response.data.data[0].userName);
            setName(response.data.data[0].name);
            setUserId(response.data.data[0].userId);
            setFormData({
              username: response.data.data[0].userName,
              password: response.data.data[0].password,
              phoneNumber: response.data.data[0].mobile,
              email: response.data.data[0].email,
              panCard: response.data.data[0].pan,
              dob: response.data.data[0].dob,
            });
            // toast.success("Strategy fetch successful!");
          } else {
            console.log("not get getStrategy data");
          }
        } else {
          console.log("No token found in localStorage");
        }

        // Your API call logic here
      } catch (e) {
        console.log("API Not Fetched");
      } finally {
        // setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();
  }, []);

  // if (loading) {
  //   console.log("Loader should display now");
  //   return (
  //     <div className="loader-container">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleEditImageClick = () => {
    // Trigger the click event on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      // Access all form data values
      console.log("Updated Form Data:", formData.phoneNumber);

      const response = await callAxiosApi(updateData, {
        table: USER,
        id: userId,
        name: formData.fullName,
        mobile: formData.phoneNumber,
        email: formData.email,
        userName: formData.username,
        password: formData.password,
        aadhar: formData.dob,
        pan: formData.panCard,
        isMaster: false,
      });

      if (response.data.errorStatus === false) {
        console.log("call success update");
        // setInsights(response.data.data); // Update insights with fetched data
        console.log("insights =", response.data);
        toast.success("profile updated successfully");

        setTimeout(() => {
          // closePopup();
          closePopup('update')
        }, 2000);
      } else {
        console.log("not get getStrategy data");
      }
    } catch (e) {
      console.log("loading =", loading);
      toast.error("something went wrong, please try again.");

      console.log("API Not Fetched");
    } finally {
      console.log("loading =", loading);

      // setLoading(false); // Stop loading once the data is fetched or an error occurs
    }
  };

  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");

    navigate('/')
  
    // Optionally, you can redirect the user to a login page or homepage
    // window.location.href = "/login"; // example redirect
  };

  return (
    <div className={styles.popupOverlay} onClick={closePopup}>
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
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.profileImageWrapper}>
          <img
            src={profilePicture}
            alt="Profile"
            className={styles.profileImage}
          />
          <input
            type="file"
            accept="image/*"
            className={styles.profileImageInput}
            ref={fileInputRef} // Reference the file input
            onChange={handleProfilePictureChange}
          />
          <FaEdit
            className={styles.editImageIcon}
            onClick={handleEditImageClick}
          />
        </div>
        {/* <img
          src='./profile-popup-background.png'
          alt="Profile"
          className={styles.BackgroundImage}
        /> */}
        <h2 className={styles.profileName}>{name}</h2>

        <div className={styles.profileDetail}>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            disabled={!editMode.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("username")}
          /> */}
        </div>

        <div className={styles.profileDetail}>
          <label>Password</label>
          <input
            type="text"
            value={formData.password}
            // disabled={!editMode.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("password")}
          /> */}
        </div>

        <div className={styles.profileDetail}>
          <label>Phone Number</label>
          <input
            type="text"
            value={formData.phoneNumber}
            // disabled={!editMode.phoneNumber}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("phoneNumber")}
          /> */}
        </div>

        <div className={styles.profileDetail}>
          <label>Email ID</label>
          <input
            type="text"
            value={formData.email}
            // disabled={!editMode.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("email")}
          /> */}
        </div>

        <div className={styles.profileDetail}>
          <label>PAN Card</label>
          <input
            type="text"
            value={formData.panCard}
            disabled={!editMode.panCard}
            onChange={(e) => handleInputChange(e, "panCard")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("panCard")}
          /> */}
        </div>

        <div className={styles.profileDetail}>
          <label>Date of Birth</label>
          <input
            type="text"
            value={formData.dob}
            disabled={!editMode.dob}
            onChange={(e) => handleInputChange(e, "dob")}
          />
          {/* <FaEdit
            className={styles.editIcon}
            onClick={() => handleEditClick("dob")}
          /> */}
        </div>

        <button className={styles.logoutButton} onClick={handleSignOut}>
          <FaSignOutAlt className={styles.icon} /> Sign Out
        </button>
        <button
          className={styles.updateProfileButton}
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;

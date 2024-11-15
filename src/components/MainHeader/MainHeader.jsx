import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MainHeader.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate, useLocation } from "react-router-dom";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import BrokerListPopup from "../BrokerListPopup/BrokerListPopup";
import AuthenticationPopup from "../Header/AuthenticationPopup";

const MainHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isBrokerPopupOpen, setIsBrokerPopupOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const headerColor = useHeaderColor();
  const navigate = useNavigate();
  const location = useLocation(); // <-- This will help track the current route

  // Check for auth token on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLogin(true);

      if (window.location.pathname === "/") {
        navigate("/home");
      }

    } else {
      if (window.location.pathname === "/home") {
        navigate("/");
      }

      setIsLogin(false);
    }

    // If user is logged in and current path is "/", redirect to "/home"
    if (isLogin && location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]); // Empty dependency array to run only on mount

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const openProfilePopup = () => {
    setIsProfilePopupOpen(true);
  };

  const closeProfilePopup = (data) => {
    console.log("close profile popup", data);
    // toast.success("profile updated successfully!");

    setIsProfilePopupOpen(false);
  };

  const openBrokerPopup = () => {
    setIsBrokerPopupOpen(true);
  };

  const closeBrokerPopup = () => {
    setIsBrokerPopupOpen(false);
  };
  // const handleNavigation = (route) => {
  //   console.log("route");
  //   if (route === "/home") {
  //     navigate("/home");
  //   }
  // };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
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
      <div className="flexCenter innerWidth paddings h-container for-space-between">
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <img
              src="./smallcase-logo-01.png"
              alt="logo"
              onClick={() => navigate(isLogin ? "/home" : "/")}
              width={100}
            />
            <img
              src="./smallcase-text-01.png"
              alt="logo"
              onClick={() => navigate(isLogin ? "/home" : "/")}
              width={150}
            />

            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/strategies"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Strategies
            </NavLink>
            <NavLink
              to="/investment"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Investment
            </NavLink>
            <NavLink
              to="/exited-strategies"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Managers
            </NavLink>

            {/* <a
              href="#get-started" //exited-strategies
              className={location.hash === "#get-started" ? "active" : ""}
            >
              Managers
            </a> */}

            {!isLogin && (
              <button className="button get-strategy" onClick={togglePopup}>
                Get Strategy
              </button>
            )}

            {isLogin && (
              <button className="button get-strategy" onClick={openBrokerPopup}>
                Broker
              </button>
            )}

            {isLogin && (
              <button
                className="button get-strategy"
                onClick={openProfilePopup}
              >
                Profile
              </button>
            )}
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {isProfilePopupOpen && <ProfilePopup closePopup={closeProfilePopup} />}
      {isBrokerPopupOpen && (
        <BrokerListPopup closeBrokerPopup={closeBrokerPopup} />
      )}

      {isPopupVisible && <AuthenticationPopup closePopup={closePopup} />}
    </section>
  );
};

export default MainHeader;

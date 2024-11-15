import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import PopupForm from "./PopupForm";
import AuthenticationPopup from "./AuthenticationPopup";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const headerColor = useHeaderColor();
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleLinkClick = (link) => {
    console.log("link", link);
    setActiveLink(link);
    if (link === "/") {
      console.log("/ / ");

      navigate("/");
    } else if (link === "#strategies") {
      navigate("/strategies");
    } else if (link === "#home") {
      navigate("/home");
    } else if (link === "#investment") {
      navigate("/investment");
    }
     else if (link === "#exited-strategies") {
      navigate("/exited-strategies");
    }
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container for-space-between">
        {/* logo */}
        {/* <img src="./logo.png" alt="logo" width={100} /> */}

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <img src="./smallcase-logo-01.png" alt="logo" width={100} />
            <img
              src="./smallcase-text-01.png"
              alt="logo"
              onClick={() => handleLinkClick("/")}
              width={150}
            />
            <a
              // href="#home"
              onClick={() => handleLinkClick("#home")}
              className={activeLink === "#home" ? "active-link" : ""}
            >
              Home
            </a>
            <a
              // href="#strategies"
              onClick={() => handleLinkClick("#strategies")}
              className={activeLink === "#strategies" ? "active-link" : ""}
            >
              Strategies
            </a>
            <a
              // href="#contact-us"
              onClick={() => handleLinkClick("#investment")}
              className={activeLink === "#investment" ? "active-link" : ""}
            >
              Investment
            </a>
            <a
              // href="#get-started"
              onClick={() => handleLinkClick("#exited-strategies")}
              className={activeLink === "#exited-strategies" ? "active-link" : ""}
            >
              Managers
            </a>
            <button className="button get-strategy" onClick={togglePopup}>
              Get Strategy
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      {isPopupVisible && <AuthenticationPopup closePopup={closePopup} />}
    </section>
  );
};

export default Header;

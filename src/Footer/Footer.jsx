import React from "react";
import { useNavigate } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);        // Navigate to the specified path
  };

  return (
    <footer className="footer">
      <div className="footer-section logo">
        <h2>
          {" "}
          <img
            src="./footer-icon.png"
            className="footer-icon-style"
            alt=""
          />{" "}
          Equity Case
        </h2>
        <ul>
          <li>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </li>
        </ul>
        {/* <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p> */}
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./fb.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./twitter.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./insta.png" />

            {/* <i className="fab fa-instagram"></i> */}
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3 className="black-color-footer">Company</h3>
        <ul>
          <li>About</li>
          <li>Career</li>
          <li>Mobile</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="black-color-footer">Contact</h3>
        <ul>
          <li onClick={() => handleNavigation("/home")}>Home</li>
          <li onClick={() => handleNavigation("/about-us")}>About us</li>
          <li onClick={() => handleNavigation("/faqs")}>FAQ's</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="black-color-footer">Meet Us</h3>
        <ul>
          <li>+91-9925511993</li>
          <li>info@profitbuddy.in</li>
          <li>
            Anand Asset Manager
            <br />
            C-3 Haridaya
            <br />
            Anand 388001
          </li>
        </ul>
        {/* <p>+91-9925511993</p>
        <p>info@profitbuddy.in</p>
        <p>Anand Asset Manager<br />C-3 Haridaya<br />Anand 388001</p> */}
      </div>
    </footer>
  );
};

export default Footer;

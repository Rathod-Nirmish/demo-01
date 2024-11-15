// src/DownloadComponent.js
import React from "react";
import "./DownloadComponent.css";
// import qrCode from './path-to-your-image/qr-code.png'; // replace with your actual path
// import iosIcon from './path-to-your-image/ios-icon.png'; // replace with your actual path
// import androidIcon from './path-to-your-image/android-icon.png'; // replace with your actual path
// import phoneImage from './path-to-your-image/phone-image.png'; // replace with your actual path
{
  /* <img src="./equinix.png" alt="" /> */
}

const DownloadComponent = () => {
  return (
    <div className="download-container">
      <div className="text-section">
        <h1>
          Try The Future, Today.
          <br />
          Download <span className="highlight">Equitycase</span>
        </h1>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod
          Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Dolor Sit
        </p>
        <div className="download-links">
          <img src="./qr-code.png" alt="QR Code" className="qr-code" />

          <div className="download-text">
            <p>Scan To Download</p>
            <p>
              <strong>IOS & Android</strong>
            </p>
          </div>
          <div className="icons">
            <img src="./ios-icon.png" alt="iOS" className="download-icon" />
            <img
              src="./android-icon.png"
              alt="Android"
              className="download-icon"
            />
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src="./phone-image.png" alt="Phone" className="phone-image" />
      </div>
    </div>
  );
};

export default DownloadComponent;

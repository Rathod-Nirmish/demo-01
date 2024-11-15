// ProfileCreationForm.js
import React from "react";
import "./ProfileCreationForm.css";

const ProfileCreationForm = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="profile-popup-content">
      <img src="./create-profile-icon.png" alt="" />
        <h2>Create your profile</h2>
        <p>Add your contact info to get rebalance updates, portfolio insights, reminders & more</p>
        <form>
          <input type="text" placeholder="First name" className="ProfileCreationForm-textbox-style" />
          <input type="text" placeholder="Middle name" className="ProfileCreationForm-textbox-style" />
          <input type="text" placeholder="Last name" className="ProfileCreationForm-textbox-style" />
          <input type="text" placeholder="PAN Card" className="ProfileCreationForm-textbox-style" />
          <input type="text" placeholder="Phone Number" className="ProfileCreationForm-textbox-style" />
          <button type="button" className="complete-button" onClick={closePopup}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreationForm;

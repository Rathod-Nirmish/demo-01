import React, { useState } from "react";
import "./Tips.css";
import TipCard from "./TipCard";

const Tips = () => {
  const [videoSrc, setVideoSrc] = useState("https://assets.smallcase.com/smallcase/assets/videos/track_new.mp4");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleVideoChange = (src, index) => {
    setVideoSrc(src);
    setSelectedCard(index); // Set the selected card index
  };

  return (
    <section className="c-wrapper tips-gradient">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left tips-padding">
          <span className="pinkText">EVERYTHING YOU NEED TO INVEST</span>
          <span className="black-color">
            Simple, quick & delightful <br /> investing for you
          </span>

          <div className="flexColStart contactModes-tips">
            <TipCard
              imgSrc="./track-anytime-img.png"
              title="Track anytime, anywhere"
              description="Track & manage seamlessly with a real-time index value, inclusive of corp."
              onClick={() => handleVideoChange("https://assets.smallcase.com/smallcase/assets/videos/track_new.mp4", 0)}
              isSelected={selectedCard === 0}
            />

            <TipCard
              imgSrc="./invest-regularly-01.png"
              title="Invest regularly"
              description="Place orders for up to 50 stocks in 1 click as a Equitycase and save time"
              onClick={() => handleVideoChange("https://assets.smallcase.com/smallcase/assets/videos/sip_new.mp4", 1)}
              isSelected={selectedCard === 1}
            />

            <TipCard
              imgSrc="./invest-regularly-02.png"
              title="Invest regularly"
              description="Invest in a disciplined manner by starting on your Equitycase for every week."
              onClick={() => handleVideoChange("https://assets.smallcase.com/smallcase/assets/videos/create_new.mp4", 2)}
              isSelected={selectedCard === 2}
            />
          </div>
        </div>

        {/* right side */}
        <div className="tips-background-style c-right tips-right-padding">
          <div className="image-container-background">
            <img src="./phone-background-02.png" alt="" />
            <video className="video-overlay" src={videoSrc} autoPlay muted loop controls />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;

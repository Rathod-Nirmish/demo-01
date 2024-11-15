import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./TradeWorkCarousel.css";

const cards = [
  {
    title: "CNBC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imgSrc: "./trade-could-works-slider-img-01.png",
  },
  {
    title: "Bloomberg",
    description:
      "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.",
    imgSrc: "./trade-could-works-slider-img-02.png",
  },
  {
    title: "Reuters",
    description:
      "Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.",
    imgSrc: "./trade-could-works-slider-img-03.png",
  },
  {
    title: "BBC",
    description:
      "Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
    imgSrc: "./trade-could-works-slider-img-04.png",
  },
];

const TradeWorkCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCard = (card, index) => (
    <div className="card" key={index}>
      <div className="card-image">
        <img src={card.imgSrc} alt={card.title} />
        <button className="play-button">
          {/* <svg height="24" width="24" viewBox="0 0 24 24">
            <path 
              d="M8 5v14l11-7z" 
              fill={index % 2 === 0 ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 255, 1)"}
            />
          </svg> */}
          <img src="./Play-Button-Circled.png" alt="" />
        </button>
      </div>
      <div className="card-content">
        <h2>{card.title}</h2>
        <p className="trade-work-description">{card.description}</p>
        <a href="#view-more" className="view-more">
          <span className="view-more-padding">View More</span> 
          <img src="./single-arrow-img.png" alt="" />
        </a>
      </div>
    </div>
  );
  

  return (
    <div>
      <div className="trade-cloud-container">
        <h1 className="trade-cloud-heading">How Trade Cloud works?</h1>
        <button className="learn-more-button">
          {/* <FaGlobe className="icon" /> */}
          <img src="./learn_more.png" className="learn-more-img" alt="" />
        </button>
      </div>
      {/* carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => renderCard(card, index))}
        </Slider>
      </div>
    </div>
  );
};

export default TradeWorkCarousel;

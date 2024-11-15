import React from 'react';
import './HeroReviewCard.css';

const HeroReviewCard = ({ image, rating, text }) => {
  // Create an array with length equal to the rating to render stars
  const stars = Array(rating).fill(0);

  return (
    <div className="hero-review-card hero-review-card-alignment">
      <div className="review-header">
        <img src={image} alt="Reviewer" className="reviewer-image" />
        <div className="stars">
          {stars.map((_, index) => (
            <span key={index} className="star">&#9733;</span>
          ))}
        </div>
      </div>
      <div className='hero-review-text-size'>{text}</div>
    </div>
  );
};

export default HeroReviewCard;

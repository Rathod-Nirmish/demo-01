import React from 'react';
import BackgroundImage from '../../assets/images/Background.png'; // Replace with your actual image path

const PromotionBanner = () => {
  return (
    <div className='items-center justify-center px-20'>
    <div 
      className="relative bg-cover h-[400px] flex items-center rounded-lg justify-center p-8"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Buy, Trade, And Hold <br />
          600+ Strategies On{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #31E5FF 11%, #448FFF 50%, #FF82BE 100%)',
            }}
          >
            Equity Case
          </span>
        </h1>
        <button
          className="mt-8 px-6 py-3 rounded-lg text-white font-bold text-lg"
          style={{
            backgroundImage: 'linear-gradient(240deg, #25F6FF 0%, #7782FF 55%, #FF5196 100%)',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
};

export default PromotionBanner;


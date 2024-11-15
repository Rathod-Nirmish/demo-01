import React from 'react';
import './Advantages.css';

const advantagesData = [
  { icon: './never-miss.png', title: 'Never Miss A Trade', subtitle: 'Worldwide' },
  { icon: './24-by-7.png', title: '24/7 Trading', subtitle: 'In 2 Weeks' },
  { icon: './no-emotion.png', title: 'No Emotion', subtitle: 'For Students' },
  { icon: './100-save.png', title: '100% Save', subtitle: 'Worldwide' },
  { icon: './internal-external.png', title: 'Internal & External Signals', subtitle: 'In 3 weeks' },
  { icon: './advance-statistic.png', title: 'Advanced Statistics', subtitle: 'In 3 weeks' },
];

const Advantages = () => {
  return (
    <div className="advantages-container">
      <h2 className="advantages-title">Advantages</h2>
      <div className="advantages-grid">
        <div className="advantages-row">
          {advantagesData.slice(0, 3).map((advantage, index) => (
            <div key={index} className="advantage-card">
              {/* <div className="advantage-icon">{advantage.icon}</div> */}
              <img src={advantage.icon} style={{ display: 'inline' }} alt="home" />

              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-subtitle">{advantage.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="advantages-row">
          {advantagesData.slice(3).map((advantage, index) => (
            <div key={index} className="advantage-card-row-2">
              {/* <div className="advantage-icon">{advantage.icon}</div> */}
              <img src={advantage.icon} style={{ display: 'inline' }} alt="home" />
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-subtitle">{advantage.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;

import React from 'react'
import './SCurve.css';
const ScurveTimeline = () => {
    const snacks = [
        { time: '09:00 AM', description: 'Fruit Salad' },
        { time: '11:00 AM', description: 'Yogurt' },
        { time: '01:00 PM', description: 'Granola Bar' },
        { time: '03:00 PM', description: 'Nuts' },
        { time: '05:00 PM', description: 'Smoothie' }
      ];
    return (
        <div className="sine-curve-container">
        <svg width="100%" height="200" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0 10 Q 5 0 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" className="sine-curve" />
        </svg>
      </div>
      );
}

export default ScurveTimeline
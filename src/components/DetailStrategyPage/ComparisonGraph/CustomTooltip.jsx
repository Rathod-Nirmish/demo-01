// src/components/CustomTooltip.js
import React from 'react';
import './CustomTooltip.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`All Weather: ₹${payload[0].value}`}</p>
        <p className="intro">{`Equity: ₹${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

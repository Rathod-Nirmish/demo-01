import React, { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Sidebar.module.css';

const CustomRangeSlider = ({ min, max, step, onChange }) => {
  const [values, setValues] = useState([min, max]);

  const handleChange = (values) => {
    setValues(values);
    onChange(values);
  };

  return (
    <div className={styles.rangeContainer}>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '3px',
              width: '100%',
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              backgroundColor: '#FFF',
              border: '2px solid #548BF4',
              borderRadius: '50%'
            }}
          />
        )}
      />
      <div className={styles.rangeValues}>
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
  );
};

export default CustomRangeSlider;

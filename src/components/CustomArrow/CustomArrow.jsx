import React from "react";

const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} ${direction}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

export default CustomArrow;

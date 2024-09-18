import React from "react";
import "./button.css";

const Button = ({ title, color, bgColor, ...rest }) => {
  return (
    <button className="button" style={{ backgroundColor: bgColor }} {...rest}>
      {title}
    </button>
  );
};

export default Button;

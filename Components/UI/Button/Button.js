// React Imports
import React from "react";

// Import Styles
import "../../../theme.css";
import classes from "./Button.module.css";

const Button = ({ className, onPressed, children }) => {
  return (
    <button className={`uppercase font-sans disable-select ${classes["btn-custom"]} ${className}`} onClick={onPressed}>
      {children}
    </button>
  );
};

export default Button;

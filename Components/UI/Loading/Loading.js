// React Import
import React from "react";

// Import Styles
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={`${classes.mainDiv}`}>
      <span className={`${classes.loader}`}></span>
      <span className="text-white font-light mt-5 text-2xl uppercase font-sans">Elysium Sols</span>
    </div>
  );
};

export default Loading;

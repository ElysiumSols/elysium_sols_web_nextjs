// React Import
import React from "react";

// Style Import
import "../../../theme.css";
import classes from "./SectionHeading.module.css";

const SectionHeading = ({ children, backGroundColor, foreGroundColor }) => {
  const backgroundTextColor = backGroundColor;
  const foregroundTextColor = foreGroundColor;

  return (
    <div className={`relatives md:mb-36 mb-24`}>
      {/* Backgorund Text */}
      <div className={`absolute uppercase font-bold z-0 ${classes.lft} ${backgroundTextColor} md:text-8xl text-6xl`}>
        <h1 className="disable-select">{children}</h1>
      </div>

      {/* Foregorund Text */}
      <div
        className={`absolute uppercase z-10 ${classes.tp} ${foregroundTextColor} md:font-medium font-semibold lg:text-6xl text-4xl`}
      >
        <h3 className="disable-select">{children}</h3>
      </div>
    </div>
  );
};

export default SectionHeading;

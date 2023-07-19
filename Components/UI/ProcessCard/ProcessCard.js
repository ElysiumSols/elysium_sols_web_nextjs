// React Import
import React from "react";

// Import Style
import "../../../theme.css";
import classes from "./ProcessCard.module.css";

const ProcessCard = ({ title, description, icon }) => {
  return (
    <div className={`${classes.processCard} flex items-center p-6 m-5 md:flex-row flex-col-reverse`}>
      {/* Content */}
      <div className={`flex-1 xl:mt-0 lg:mt-0 md:mt-0 mt-5 w-full`}>
        {/* Title */}
        <h4 className={`text-color-black mb-2 md:text-4xl text-2xl`}>{title}</h4>

        {/* Description */}
        <p className={`text-color-black md:text-justify text-left md:w-96 w-full md:text-base text-sm`}>
          {description}
        </p>
      </div>

      {/* Image */}
      <div className={`flex-initial md:w-1/3 w-2/4`}>
        <img className={`disable-select w-full h-full object-contain object-right`} src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default ProcessCard;

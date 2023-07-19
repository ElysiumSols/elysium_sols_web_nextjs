// React Import
import React from "react";

// Style Import
import "../../../theme.css";
import classes from "./ProcessSectionStep.module.css";

const ProcessSectionStep = (props) => {
  return (
    <div
      className={`mx-auto flex flex-wrap flex-row justify-center 
        items-center disable-select`}
    >
      {/* Step Number */}
      <div
        className={`flex justify-center items-center rounded-lg h-10 w-10 text-center mx-1 text-color-black font-medium md:text-3xl text-2xl`}
      >
        <div
          className={`rounded-lg h-10 absolute ${classes["z-m1"]} ${classes["custom-wh"]} ${
            props.activeStep === 0 && classes.activeStep
          }`}
        ></div>
        <span className={`${props.activeStep === 0 && classes.activeStepColor}`}>1</span>
      </div>

      {/* Divider */}
      <div className={`bg-gray-400 h-1 rounded-full md:w-12 w-5 md:mx-1 mx-0`}></div>

      {/* Step Number */}
      <div
        className={`flex justify-center items-center rounded-lg h-10 w-10 text-center mx-1 text-color-black font-medium md:text-3xl text-2xl`}
      >
        <div
          className={`rounded-lg h-10 absolute ${classes["z-m1"]} ${classes["custom-wh"]} ${
            props.activeStep === 1 && classes.activeStep
          }`}
        ></div>
        <span className={`${props.activeStep === 1 && classes.activeStepColor}`}>2</span>
      </div>

      {/* Divider */}
      <div className={`bg-gray-400 h-1 rounded-full md:w-12 w-5 md:mx-1 mx-0`}></div>

      {/* Step Number */}
      <div
        className={`flex justify-center items-center rounded-lg h-10 w-10 text-center mx-1 text-color-black font-medium md:text-3xl text-2xl`}
      >
        <div
          className={`rounded-lg h-10 absolute ${classes["z-m1"]} ${classes["custom-wh"]} ${
            props.activeStep === 2 && classes.activeStep
          }`}
        ></div>
        <span className={`${props.activeStep === 2 && classes.activeStepColor}`}>3</span>
      </div>

      {/* Divider */}
      <div className={`bg-gray-400 h-1 rounded-full md:w-12 w-5 md:mx-1 mx-0`}></div>

      {/* Step Number */}
      <div
        className={`flex justify-center items-center rounded-lg h-10 w-10 text-center mx-1 text-color-black font-medium md:text-3xl text-2xl`}
      >
        <div
          className={`rounded-lg h-10 absolute ${classes["z-m1"]} ${classes["custom-wh"]} ${
            props.activeStep === 3 && classes.activeStep
          }`}
        ></div>
        <span className={`${props.activeStep === 3 && classes.activeStepColor}`}>4</span>
      </div>

      {/* Divider */}
      <div className={`bg-gray-400 h-1 rounded-full md:w-12 w-5 md:mx-1 mx-0`}></div>

      {/* Step Number */}
      <div
        className={`flex justify-center items-center rounded-lg h-10 w-10 text-center mx-1 text-color-black font-medium md:text-3xl text-2xl`}
      >
        <div
          className={`rounded-lg h-10 absolute ${classes["z-m1"]} ${classes["custom-wh"]} ${
            props.activeStep === 4 && classes.activeStep
          }`}
        ></div>
        <span className={`${props.activeStep === 4 && classes.activeStepColor}`}>5</span>
      </div>
    </div>
  );
};

export default ProcessSectionStep;

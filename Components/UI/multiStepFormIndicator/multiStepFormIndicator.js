// React Import
import React, { useRef, useEffect } from "react";

// Style Import
import classes from "./multiStepFormIndicator.module.css";

const MultiStepFormIndicator = ({ activeCount, showStep4 }) => {
  const contentOne =
    activeCount === 2 || activeCount === 3 || activeCount === 4 || activeCount === 6 || activeCount === 7
      ? true
      : false;
  const contentTwo = activeCount === 3 || activeCount === 4 || activeCount === 6 || activeCount === 7 ? true : false;
  const contentThree = activeCount === 4 || activeCount === 6 || activeCount === 7 ? true : false;
  const contentFour = activeCount === 6 || activeCount === 7 ? true : false;
  const contentFive = activeCount === 7 && activeCount !== 6 ? true : false;

  const dividerOne = useRef(null);
  const dividerTwo = useRef(null);
  const dividerThree = useRef(null);
  const dividerFour = useRef(null);

  const animationWidth = (element, type) => {
    element.animate([{ width: type === "f" ? "100%" : "0%" }], {
      duration: 700,
      iterations: 1,
      easing: "ease-in-out",
    }).onfinish = (e) => {
      e.target.effect.target.style.width = type === "f" ? "100%" : "0%";
    };
  };

  useEffect(() => {
    if (activeCount === 2) {
      animationWidth(dividerOne.current, "f");
    } else if (activeCount === 1) {
      animationWidth(dividerOne.current, "r");
    }

    if (activeCount === 3) {
      animationWidth(dividerTwo.current, "f");
    } else if (activeCount === 2) {
      animationWidth(dividerTwo.current, "r");
    }

    if (activeCount === 4) {
      animationWidth(dividerThree.current, "f");
    } else if (activeCount === 3) {
      animationWidth(dividerThree.current, "r");
    }

    if (activeCount === 6) {
      animationWidth(dividerFour.current, "f");
    } else if (activeCount === 4 || activeCount === 5) {
      animationWidth(dividerFour.current, "r");
    }
  }, [activeCount]);

  return (
    <div className={`mb-3 md:flex flex-row justify-center items-center hidden`}>
      {/* Step 1 */}
      <div className={`flex flex-col justify-center items-center`}>
        <span
          className={`${classes.step} ${activeCount === 1 && classes.active} ${contentOne && classes.stepComplete}`}
        >
          {contentOne ? "✓" : "1"}
        </span>
        <span
          className={`${classes.stepText} ${
            contentOne || activeCount === 1 ? classes.stepTextFullVisibility : classes.stepTexthalfVisibility
          }`}
        >
          Name
        </span>
      </div>

      {/* Divider */}
      <div className={`inline-block ${classes.seprator}`}>
        <div ref={dividerOne} style={{ width: "0%" }}></div>
      </div>

      {/* Step 2 */}
      <div className={`flex flex-col justify-center items-center`}>
        <span
          className={`${classes.step} ${activeCount === 2 && classes.active} ${contentTwo && classes.stepComplete}`}
        >
          {contentTwo ? "✓" : "2"}
        </span>

        <span
          className={`${classes.stepText} ${
            contentTwo || activeCount === 2 ? classes.stepTextFullVisibility : classes.stepTexthalfVisibility
          }`}
        >
          Contact
        </span>
      </div>

      {/* Divider */}
      <div className={`inline-block ${classes.seprator}`}>
        <div ref={dividerTwo} style={{ width: "0%" }}></div>
      </div>

      {/* Step 3 */}
      <div className={`flex flex-col justify-center items-center`}>
        <span
          className={`${classes.step} ${activeCount === 3 && classes.active} ${contentThree && classes.stepComplete}`}
        >
          {contentThree ? "✓" : "3"}
        </span>

        <span
          className={`${classes.stepText} ${
            contentThree || activeCount === 3 ? classes.stepTextFullVisibility : classes.stepTexthalfVisibility
          }`}
        >
          Services
        </span>
      </div>

      {/* Divider */}
      <div className={`inline-block ${classes.seprator}`}>
        <div ref={dividerThree} style={{ width: "0%" }}></div>
      </div>

      {/* Setp 4 */}
      <div className={`flex flex-col justify-center items-center`}>
        <span
          className={`${classes.step} ${activeCount === 4 && classes.active} ${contentFour && classes.stepComplete}`}
        >
          {contentFour ? "✓" : "4"}
        </span>

        <span
          className={`${classes.stepText} ${
            contentFour || activeCount === 4 ? classes.stepTextFullVisibility : classes.stepTexthalfVisibility
          }`}
        >
          Tech Stack
        </span>
      </div>

      {/* Divider */}
      <div className={`inline-block ${classes.seprator}`}>
        <div ref={dividerFour} style={{ width: "0%" }}></div>
      </div>

      {/* Step 5 */}
      <div className={`flex flex-col justify-center items-center`}>
        <span
          className={`${classes.step} ${activeCount === 5 && classes.active} ${contentFive && classes.stepComplete}`}
        >
          {contentFive ? "✓" : "5"}
        </span>

        <span
          className={`${classes.stepText} ${
            contentFive || activeCount === 6 ? classes.stepTextFullVisibility : classes.stepTexthalfVisibility
          }`}
        >
          Message
        </span>
      </div>
    </div>
  );
};

export default MultiStepFormIndicator;

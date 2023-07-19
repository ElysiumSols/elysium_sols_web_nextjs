// React Import
import React, { Fragment, useState } from "react";

// Plugin Import
import Slider from "react-slick";

// Style Import
import classes from "./ProcessCrousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../theme.css";

// Image Import

const ProcessCrousel = ({ children, stepChangeFunction, showDots }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const nArrow = (
    <button className={`${classes.navKeys}`} onClick={sliderRef?.slickNext}>
      {/* <span id={`${classes.next}`}>Next</span> */}
      <div className={`${classes.rightArrow}`}>
        <img src="/Images/navArrow.svg" alt="arrow" />
      </div>
    </button>
  );

  const pArrow = (
    <button className={`${classes.navKeys}`} onClick={sliderRef?.slickPrev}>
      <div className={`${classes.leftArrow}`}>
        <img src="/Images/navArrow.svg" alt="arrow" />
      </div>
      {/* <span id={`${classes.previous}`}>Previous</span> */}
    </button>
  );

  const settings = {
    dots: showDots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    beforeChange: (currentIndex, nextIndex) => stepChangeFunction(nextIndex),
  };

  return (
    <Fragment>
      <div className={`absolute ${classes.controlsWrapper}`}>
        <div className={`${classes.controls}`}>
          {pArrow}
          {nArrow}
        </div>
      </div>
      <div className={`mx-auto text-color-black md:w-9/12 w-full`}>
        <Slider ref={setSliderRef} {...settings}>
          {children}
        </Slider>
      </div>
    </Fragment>
  );
};

export default ProcessCrousel;

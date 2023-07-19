// React Import
import React from "react";

// Style Import
import classes from "./TestimonialCards.module.css";

const TestimonialCards = ({
  userImage,
  userName,
  userDesignation,
  userReview,
}) => {
  return (
    <div className={`w-full`}>
      <div
        className={`bg-gray-100 w-full mx-auto mt-10 flex md:flex-row-reverse flex-col`}
      >
        {/* User Image */}
        <div className={`lg:w-11/12`}>
          <img
            src={userImage}
            alt={userName}
            className={`w-full h-full object-cover`}
          />
        </div>

        <div className={`p-10 flex-grow`}>
          {/* User Name and Designation */}
          <div className={`mx-auto text-center mb-8`}>
            <h2
              className={`text-2xl leading-5 tracking-wide uppercase font-medium ${classes.darkColor}`}
            >
              {userName}
            </h2>
            <h6
              className={`uppercase text-sm font-semibold opacity-60 ${classes.semiDarkColor}`}
            >
              {userDesignation}
            </h6>
          </div>

          {/* User Message */}
          <div className={`text-base font-normal`}>
            <p className={`${classes.darkColor}`}>&quot;{userReview}&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

// React Import
import React from "react";

// Import Style
import "../../../theme.css";
import classes from "./PortolioCard.module.css";

const PortfolioCard = ({ content }) => {
  return (
    <div className={`${classes.card} rounded-tr rounded-tl flex flex-col md:mb-0 mb-5 md:w-full w-3/4 mx-auto`}>
      <div className={`flex-auto overflow-hidden`}>
        {/* <div className={`w-full h-full bg-gray-400 flex justify-center items-center ${imageLoading && 'hidden'}`}><Loader /></div> */}
        <img
          className={`w-full rounded-tr rounded-tl h-full object-cover`}
          src={content.imageUrl}
          alt={content.name}
          // onLoad={setImageLoading(false)}
        />
      </div>
      <div className={`${classes["card-bg"]} rounded-br rounded-bl w-full text-center py-3`}>
        <h3>{content.name}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;

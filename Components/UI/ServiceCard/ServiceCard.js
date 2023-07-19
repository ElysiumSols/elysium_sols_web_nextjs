// React Import
import React from "react";

// Style Import
import classes from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  return (
    <div className={`${classes.spacer} mx-5 my-7 md:inline-block block`}>
      <div className={`${classes.serviceWrapper}`}>
        <div className={`${classes.serviceCard} p-2 flex flex-col rounded`}>
          <div className={`flex-1`}>
            <div className={`w-28 h-28`}>
              <img className={`w-full h-full object-contain object-left`} src={props.icon} alt="Card Icon" />
            </div>
          </div>
          <div className={`ml-auto`}>
            <h3 className={`text-white font-sans uppercase font-medium`}>{props.children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

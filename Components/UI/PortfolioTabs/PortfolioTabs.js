// React Import
import React from "react";

// Style Import
import "../../../theme.css";
import classes from "./PortfolioTabs.module.css";

const PortfolioTabs = ({ activeTab, onPressed }) => {
  return (
    <div className={`disable-select flex flex-wrap justify-center align-middle mx-auto md:w-max w-full`}>
      <button
        onClick={() => onPressed(0)}
        className={`${classes.tabsColor} text-sm  ${activeTab === 0 && classes.active}`}
      >
        WEB Applications
      </button>
      <span className={`text-white mx-3`}>|</span>
      <button
        onClick={() => onPressed(1)}
        className={`${classes.tabsColor} text-sm ${activeTab === 1 && classes.active}`}
      >
        MOBILE Applications
      </button>
      <span className={`text-white mx-3`}>|</span>
      <button
        onClick={() => onPressed(2)}
        className={`${classes.tabsColor} text-sm ${activeTab === 2 && classes.active}`}
      >
        AI Projects
      </button>
      <span className={`text-white mx-3`}>|</span>
      <button
        onClick={() => onPressed(3)}
        className={`${classes.tabsColor} text-sm ${activeTab === 3 && classes.active}`}
      >
        UI/UX Projects
      </button>
      <span className={`text-white mx-3`}>|</span>
      <button
        onClick={() => onPressed(4)}
        className={`${classes.tabsColor} text-sm ${activeTab === 4 && classes.active}`}
      >
        All
      </button>
    </div>
  );
};

export default PortfolioTabs;

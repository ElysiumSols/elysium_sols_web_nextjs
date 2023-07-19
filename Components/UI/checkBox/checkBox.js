// React Import
import React from "react";

// Style Import
import classes from "./checkBox.module.css";
import "../../../theme.css";

const CheckBox = ({ elementRef, inputLabel, styles }) => {
    return <div className={`${styles} flex flex-row justify-center items-center`}>
        <label htmlFor="checkBoxDivInput" className="disable-select mr-2 uppercase text-sm font-medium cursor-pointer">{inputLabel}</label>
        <label className={`${classes.checkBoxContainer}`}>
            <input id="checkBoxDivInput" ref={elementRef} type="checkbox" />
            <div className={`${classes.checkmark}`}></div>
        </label>
    </div>
};

export default CheckBox;
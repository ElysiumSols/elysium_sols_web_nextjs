// React Import
import React, { useState } from "react";

// Style Import
import classes from "./multiSelectButton.module.css";
import "../../../theme.css";

const MultiSelectButton = ({ onPress, content, selected }) => {
    const [active, setActive] = useState(selected);

    const btnClciked = () => {
        setActive(val => {
            if(val === true) {
                onPress(false);
                return false;
            }
            else {
                onPress(true);
                return true;
            }
        });
    }

    return <div onClick={btnClciked} className={`text-center disable-select w-full h-14 rounded flex justify-center items-center text-sm font-medium uppercase ${classes.btn} ${active && classes.btnActive}`}>{content}</div>

};

export default MultiSelectButton;
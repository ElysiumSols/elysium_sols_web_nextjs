// React Import
import React from 'react';

const ProcessCardButtons = ({ children, styleClassName, onPressed, buttonIcon }) => {
  return (
    <button className={`${styleClassName}`} onClick={onPressed}>
      <i>{buttonIcon}</i> {children}
    </button>
  );
};

export default ProcessCardButtons;

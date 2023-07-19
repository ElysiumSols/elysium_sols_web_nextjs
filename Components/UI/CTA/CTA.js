// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Style Import
import classes from "./CTA.module.css";

const CTA = ({ onPressed, onConfirmation, onPressedCancel }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      transition={{ type: "spring", duration: 1 }}
      variants={{
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      className={`${classes.bg} mx-auto mt-24 px-5 py-2 flex items-center md:flex-row flex-col lg:max-w-3xl md:max-w-4xl max-w-full`}
    >
      <div className={`flex-auto`}>
        <h1 className={`uppercase md:text-2xl text-lg md:mb-0 mb-3`}>
          Do you have an Awesome Digital Business Plan?
        </h1>
      </div>
      <button
        onClick={onPressed}
        className={`font-normal ${classes.button} md:h-11 h-9 md:w-2/4 w-full md:text-xl text-lg`}
      >
        LET&apos;S GET STARTED
      </button>
    </motion.div>
  );
};

export default CTA;

// React Import
import React, { useEffect } from "react";

// Styles Import
import classes from "./Backdrop.module.css";

// Plugin Import
import { motion, AnimatePresence, usePresence } from "framer-motion";

const Backdrop = ({ onPressed, children, showElement, elementKey }) => {
  // document.body.style.overflowY = showElement ? "hidden" : "";

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent, safeToRemove])

  const dismiss = (event) => {
    // if (event.target.id.toLowerCase() === "parent_BG".toLowerCase()) {
    //   onPressed();
    // }
  };

  return (
    <AnimatePresence>
      {
        showElement && (
          <motion.div
            id="parent_BG"
            key={"backDrop"}
            // variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            transition={{
              type: "tween",
              easings: ["easeInOut"],
            }}
            onClick={dismiss.bind(this)}
            className={`${classes.backDrop} flex justify-center items-center`}>
            {children}
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Backdrop;

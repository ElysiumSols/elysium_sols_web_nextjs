// React Import
import React from "react";

// Style Import
// import classes from "./ContactForm.module.css";
import "../../../theme.css";

// Components Import
import MultiStepForm from "../multiStepForm/multiStepForm";

// Plugin Import
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({ onConfirm, onCancel }) => {

  return (
    <AnimatePresence>
      <motion.div
        key={"contactForm"}
        // variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ delay: 0.2, type: "tween", easings: ["easeInOut"] }}
        className={`p-5 bg-white 2xl:w-2/4 xl:w-3/4 w-full 2xl:h-3/5 h-5/6 relative flex flex-col justify-center items-center rounded-md`}>
        <button className="absolute top-2 right-3 opacity-50 hover:opacity-100 text-xl" onClick={onCancel}>
          X
        </button>
        <h2 className={`uppercase md:font-medium font-semibold text-4xl text-color-black mb-3`}>Contact US</h2>
        <div className={`flex-1 flex justify-center items-center w-full`}><MultiStepForm dismissForm={onCancel} /></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;

// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Imports
import SectionHeading from "../../UI/SectionHeading/SectionHeading";

// Companies Logo List
import clientsLogoList from "./clientsLogoList";

// Style Import
import classes from "./Clients.module.css";

const Clients = ({ children, onConfirm }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className={`mx-auto px-3 w-full md:py-32 py-10 lg:max-w-6xl md:max-w-4xl max-w-max`}
    >
      {/* Section Heading */}
      <SectionHeading
        backGroundColor="text-color-black-reduce"
        foreGroundColor="text-color-black"
      >
        Clients
      </SectionHeading>

      {/* Logo Grid */}
      <motion.div
        initial="hidden"
        ref={ref}
        animate={controls}
        transition={{ type: "spring", duration: 1 }}
        variants={{
          hidden: { x: 200, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        className={`mx-auto lg:max-w-5xl md:max-w-6xl max-w-full`}
      >
        <div
          className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-12 gap-8`}
        >
          {clientsLogoList.map((item) => {
            return (
              <motion.div
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ type: "spring", duration: 1 }}
                variants={{
                  hidden: { x: 200, scale: 0 },
                  visible: { x: 0, scale: 1 },
                }}
                key={clientsLogoList.indexOf(item)}
                className={`h-24 w-24 mx-auto ${classes.logo}`}
              >
                <img className={`w-full h-full`} src={item} alt={`Logo`} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {children}
    </div>
  );
};

export default Clients;

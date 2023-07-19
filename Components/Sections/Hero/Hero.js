// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Imports
import ParticleBackground from "../../UI/ParticleBackground/ParticleBackground";
import Button from "../../UI/Button/Button";

// Import Styles
import "../../../theme.css";

const Hero = ({ children, onContactPressed, siteLoaded }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`w-full flex flex-col h-screen relative`}>
      {/* Background Effect */}
      <ParticleBackground />

      {/* Childern Props */}
      <div className={`flex-initial`}>{children}</div>

      <motion.div
        initial="hidden"
        ref={ref}
        animate={controls}
        transition={{ type: "spring", duration: 1 }}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        className={`w-full h-screen flex flex-col items-center justify-center md:mt-0 mt-12 md:px-0 px-2`}
      >
        {/*Tag Line*/}
        <h2
          className={`disable-select text-white text-center font-thin lg:text-5xl md:text-4xl text-3xl xl:w-1/2 lg:w-2/3 md:w-2/3 w-full`}
        >
          Let us do the <span className={`font-medium`}>work</span>, so you can{" "}
          <span className={`font-medium`}>focus</span> on what{" "}
          <span className={`font-medium`}>matters</span>
        </h2>

        {/*Button*/}
        <Button
          className={`mt-10 md:text-lg text-sm p-3 z-0 md:font-light font-medium z-nav`}
          onPressed={onContactPressed}
        >
          Have an idea ping us
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;

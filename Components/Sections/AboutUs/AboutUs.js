// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Import
import SectionHeading from "../../UI/SectionHeading/SectionHeading";

// Style Imports
import "../../../theme.css";

// Image Import

const AboutUs = () => {
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
        About Us
      </SectionHeading>

      {/* Section Content */}
      <div
        className={`flex flex-col-reverse md:flex-row md:items-center justify-start`}
      >
        {/* Text */}
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1 }}
          variants={{
            hidden: { x: -200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className={`flex-1 md:mr-3 mr-0`}
        >
          <p className={`text-justify text-base`}>
            {`Elysium Sols, established in January 2019, is a premier website development company specializing in infusing agility into businesses, both small-scale and large-scale, using state-of-the-art technology solutions. With a track record of empowering numerous startups and enterprise organizations, we pride ourselves on tailoring technology strategies that drive successful business outcomes. Our expertise has not only guided startups towards prosperous exits but has also equipped established enterprises with the agility to capture new market opportunities.`}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1 }}
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className={`flex-1 md:ml-3 ml-0`}
        >
          <img
            className="disable-select"
            src="/Images/About_Us.svg"
            alt="Illustration of group of people"
            width="100%"
            height="100%"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

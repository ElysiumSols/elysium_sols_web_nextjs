// React Import
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Components Import
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import ProcessSectionStep from "../../UI/ProcessSectionStep/ProcessSectionStep";
import ProcessCard from "../../UI/ProcessCard/ProcessCard";
import ProcessCrousel from "../../UI/ProcessCrousel/ProcessCrousel";

// Style Import
import "../../../theme.css";

// Process Data Import
import ProcessContentList from "./ProcessContentList";

const Process = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const changeStep = (val) => {
    setCurrentCard(val);
  };

  return (
    <div className={`mx-auto px-3 lg:max-w-6xl md:max-w-4xl max-w-max w-full md:py-32 py-10`}>
      {/* Section Heading */}
      <SectionHeading backGroundColor="text-color-black-reduce" foreGroundColor="text-color-black">
        Process
      </SectionHeading>

      <motion.div
        initial="hidden"
        ref={ref}
        animate={controls}
        transition={{ type: "spring", duration: 1 }}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
      >
        {/* Steps */}
        <ProcessSectionStep activeStep={currentCard} />

        {/* Card */}
        <ProcessCrousel showDots={false} stepChangeFunction={changeStep}>
          {ProcessContentList.map((item) => (
            <ProcessCard
              key={item.cardID}
              title={item.cardTitle}
              description={item.cardDescription}
              icon={item.cardIcon}
            />
          ))}
        </ProcessCrousel>
      </motion.div>
    </div>
  );
};

export default Process;

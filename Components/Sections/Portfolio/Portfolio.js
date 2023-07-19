// React Import
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { ThreeDots } from "react-loader-spinner"
import { useAnimation, motion } from "framer-motion";

// Components Import
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import PortfolioTabs from "../../UI/PortfolioTabs/PortfolioTabs";
import PortfolioProjectsGrid from "../../UI/PortfolioProjectsGrid/PortfolioProjectsGrid";

// Style Import
import "../../../theme.css";

// Import Data
import ProjectData from "./PortfolioData";

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const type =
    (index === 0 && "web") ||
    (index === 1 && "mobile") ||
    (index === 2 && "ai") ||
    (index === 3 && "uiux") ||
    (index === 4 && "all");

  const dataSupply =
    type === "all"
      ? [...ProjectData]
      : ProjectData.filter((item) => item.type === type);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [index, isLoading]);

  const btnClicked = (val) => {
    setIsLoading(true);
    setIndex(val);
  };

  return (
    <div className={`bg-secondary-color w-full`}>
      <div
        className={`mx-auto px-3 lg:max-w-6xl md:max-w-4xl max-w-max w-full md:py-32 py-10`}
      >
        {/* Section Heading */}
        <SectionHeading
          backGroundColor="text-color-white-reduce"
          foreGroundColor="text-color-white"
        >
          Portfolio
        </SectionHeading>

        {/* Tabs Buttons */}
        <PortfolioTabs activeTab={index} onPressed={btnClicked} />

        {/* Grid */}
        {isLoading === true ? (
          <div className={`w-full mt-10`}>
            <div className={`max-w-max mx-auto`}>
              <ThreeDots color="#777777" height={50} width={50} timeout={1000} />
            </div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            ref={ref}
            animate={controls}
            transition={{ type: "spring", duration: 1 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <PortfolioProjectsGrid data={dataSupply} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

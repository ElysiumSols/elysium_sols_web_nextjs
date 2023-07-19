// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Import
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import ServiceCard from "../../UI/ServiceCard/ServiceCard";

// Style Import
import "../../../theme.css";

// List Import
import ServicesList from "./ServiceCardsList";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`bg-secondary-color w-full`}>
      <div className={`mx-auto px-3 lg:max-w-6xl md:max-w-4xl max-w-max w-full md:py-32 py-10`}>
        {/* Section Heading */}
        <SectionHeading backGroundColor="text-color-white-reduce" foreGroundColor="text-color-white">
          Services
        </SectionHeading>

        {/* Services Cards */}
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1 }}
          variants={{ hidden: { y: 200, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className={`flex flex-wrap justify-center`}
        >
          {ServicesList.map((item) => (
            <ServiceCard key={item.id} icon={item.icon}>
              {item.title}
              <br />
              {item.serviceType}
            </ServiceCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

// React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Imports
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import ProcessCrousel from "../../UI/ProcessCrousel/ProcessCrousel";
import TestimonialCards from "../../UI/TestimonialCards/TestimonialCards";

// Style Import
// import classes from "./Clients.module.css";

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`mx-auto px-3 lg:max-w-6xl md:max-w-4xl max-w-max w-full md:py-32 py-10`}>
      {/* Section Heading */}
      <SectionHeading backGroundColor="text-color-black-reduce" foreGroundColor="text-color-black">
        Reviews
      </SectionHeading>

      <motion.div
        initial="hidden"
        ref={ref}
        animate={controls}
        transition={{ type: "spring", duration: 1 }}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
      >
        {/* Crousel */}
        <ProcessCrousel showDots={true} stepChangeFunction={() => {}}>
          <TestimonialCards
            userImage={"https://img.freepik.com/free-photo/portrait-handsome-man-smiling_164678-205.jpg?w=1380"}
            userName={"Test Name"}
            userDesignation={"Test Designation"}
            userReview={`There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable.`}
          />

          <TestimonialCards
            userImage={"https://img.freepik.com/free-photo/portrait-handsome-man-smiling_164678-205.jpg?w=1380"}
            userName={"Test Name"}
            userDesignation={"Test Designation"}
            userReview={`There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable.`}
          />

          <TestimonialCards
            userImage={"https://img.freepik.com/free-photo/portrait-handsome-man-smiling_164678-205.jpg?w=1380"}
            userName={"Test Name"}
            userDesignation={"Test Designation"}
            userReview={`There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable.`}
          />
        </ProcessCrousel>
      </motion.div>
    </div>
  );
};

export default Testimonials;

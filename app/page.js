"use client";
// React Import
import React, { Fragment } from "react";

// Hooks Import

// Components Import
import CTA from "@/Components/UI/CTA/CTA";

// Secton Import
import Hero from "@/Components/Sections/Hero/Hero";
import AboutUs from "@/Components/Sections/AboutUs/AboutUs";
import Services from "@/Components/Sections/Services/Services";
import Process from "@/Components/Sections/Process/Process";
import Portfolio from "@/Components/Sections/Portfolio/Portfolio";
import Clients from "@/Components/Sections/Clients/Clients";
// import Testimonials from "./Components/Sections/Testimonials/Testimonials";

// Styles Import
import "../theme.css";

const Home = ({ siteloading, dispForm, dismissForm }) => {
  const contactButtonPressed = () => {
    // disableScroll();
    // setDispForm(true);
    window.open("https://form.jotform.com/223421865801049", "_blank").focus();
  };
  return (
    <Fragment>
      <section id="home">
        <Hero
          siteLoaded={siteloading}
          onContactPressed={contactButtonPressed}
        ></Hero>
      </section>
      <section id="aboutUs">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="clients">
        <Clients onConfirm={() => {}}>
          {/* Call To Action with Tag Line */}
          <CTA
            showForm={dispForm}
            onPressed={contactButtonPressed}
            onConfirmation={() => {}}
            onPressedCancel={dismissForm}
          />
        </Clients>
      </section>
      {/* <div className="homepageDivider"></div> */}
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
    </Fragment>
  );
};

export default Home;

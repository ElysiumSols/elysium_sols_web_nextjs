"use client";

import "./globals.css";
import { Prompt } from "next/font/google";
import React, { Fragment, useState, useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

// Hooks Import
import useScrollBlock from "@/Hooks/useScrollBlock";

// Components Import
import NavBar from "@/Components/UI/NavBar/Navbar";
// import CTA from "./Components/UI/CTA/CTA";
import LoadScreen from "@/Components/UI/Loading/Loading";

// Secton Import
import Footer from "@/Components/Sections/Footer/Footer";
import NavbarMain from "@/Components/UI/NavbarMain/NavbarMain";
import FooterMain from "@/Components/Sections/FooterMain/FooterMain";
import FacebookMessenger from "@/Components/UI/FacebookMessenger/FacebookMessenger";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [dispForm, setDispForm] = useState(false);
  const [siteloading, setSiteloading] = useState(true);
  const [locpath, setlocPath] = useState();
  const [disableScroll, enableScroll] = useScrollBlock();
  const router = useRouter();

  const navItems = [
    { id: 1, name: "Home", section: "home" },
    { id: 2, name: "About", section: "aboutUs" },
    { id: 3, name: "Services", section: "services" },
    { id: 4, name: "Process", section: "process" },
    { id: 5, name: "Portfolio", section: "portfolio" },
    { id: 6, name: "clients", section: "clients" },
    // { id: 7, name: "Reviews", section: "testimonials" },
  ];
  useEffect(() => {
    setlocPath(window.location.pathname);
    setSiteloading(false);
  }, []);

  const contactButtonPressed = () => {
    // disableScroll();
    // setDispForm(true);
    window.open("https://form.jotform.com/223421865801049", "_blank").focus();
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Elysium Sols, established in January 2019, is a premier website development company specializing in infusing agility into businesses, both small-scale and large-scale, using state-of-the-art technology solutions. With a track record of empowering numerous startups and enterprise organizations, we pride ourselves on tailoring technology strategies that drive successful business outcomes. Our expertise has not only guided startups towards prosperous exits but has also equipped established enterprises with the agility to capture new market opportunities."
        />
        <meta
          name="description"
          content="Software house, Web Applications, Mobile Applications, Website Development"
        />
        <title>Elysium Sols</title>
      </head>
      <body className={prompt.className}>
        {siteloading && <LoadScreen />}
        {locpath === "/" ? (
          <NavBar navList={navItems} onContactPressed={contactButtonPressed} />
        ) : (
          <NavbarMain onContactPressed={contactButtonPressed} />
        )}
        <FacebookMessenger />
        {children}
        <section>
          {locpath === "/" ? (
            <Footer containerId="footer" />
          ) : (
            <FooterMain containerId="footer" />
          )}
        </section>
      </body>
    </html>
  );
}

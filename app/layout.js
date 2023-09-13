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
          content="Established in 2019, Elysium Sols is a renowned software house excelling in website development, web applications, and mobile app creation. Serving startups and established businesses alike, we leverage cutting-edge technology to foster business growth. As leaders in digital solutions, we've steered startups to success and aided enterprises in expanding their online presence."
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XPW1M81K6S"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XPW1M81K6S');  `}
        </Script>
        <title>Elysium Sols | Web Applications | Mobile Applications</title>
      </head>
      <body className={prompt.className} suppressHydrationWarning={true}>
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

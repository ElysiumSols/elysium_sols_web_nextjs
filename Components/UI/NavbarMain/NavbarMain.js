// React Imports
import React, { useState } from "react";

// Styles Import
import classes from "./NavbarMain.module.css";

// Component Import
import Button from "../Button/Button";

const NavbarMain = ({ onContactPressed }) => {
  const [showMenu, setShowMenu] = useState("hidden");

  let backgroundColor = classes.backGroundColor;

  const menuBtnCallback = () => {
    setShowMenu((val) => (val.trim().length === 0 ? "hidden" : ""));
  };

  return (
    <nav className={`py-3 px-3 fixed z-10 inset-x-0`}>
      <div
        className={`mx-auto px-2 py-2 rounded ${backgroundColor} ${classes.onTop} md:max-w-6xl max-w-full`}
      >
        <div className="flex opacity-100 justify-between">
          {/* Logo Of Company */}
          <div className="flex items-center justify-center">
            <a className="flex justify-center items-center" href="/">
              <img
                src="/Images/Logo_White.svg"
                alt="Logo"
                className="inline-block w-10 mr-3 text-white"
              />
              <span className="text-white font-light text-lg ">
                Elysium Sols
              </span>
            </a>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex items-center">
            <a className="flex justify-center items-center mx-5" href="/">
              <span
                className="px-3 py-2 select-none text-white font-medium text-sm 
                          uppercase font-sans"
              >
                Home
              </span>
            </a>
            {/* Button */}
            <Button
              onPressed={onContactPressed}
              className={`md:ml-3 px-3 py-2 font-normal z-20 text-sm contact`}
            >
              Contact US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={menuBtnCallback}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-white"
                // xShow='!showMenu'
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${showMenu} mobile-menu col-auto`}>
          <a
            className={`px-3 py-2 select-none text-white font-medium text-sm 
                          uppercase font-sans`}
            href="/"
          >
            <span className={`pl-2 py-2`} onClick={menuBtnCallback}>
              HOME
            </span>
          </a>

          {/* Button */}
          <Button
            onPressed={onContactPressed}
            className={`lg:ml-3 mt-5 mb-2 mx-auto md:ml-3 px-3 py-2 w-11/12 font-normal z-20 text-sm contact`}
          >
            Contact US
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;

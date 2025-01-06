// React Import
import React from "react";

// Plugin Import
import { Link } from "react-scroll";

// Component Import
import BottomTag from "../../UI/BottomTag/BottomTag";

// Logo Image Import

const Footer = () => {
  return (
    <div className={`bg-secondary-color w-full`}>
      <div
        className={`mx-auto py-14 px-3 w-full lg:max-w-6xl md:max-w-4xl max-w-max`}
      >
        <div className={`flex md:flex-row flex-col items-start`}>
          {/* About Company and Social Link */}
          <div className={`flex-1 max-w-max`}>
            {/* Company Logo */}
            <a className="flex justify-start items-center" href="/">
              <img
                src="/Images/Logo_White.svg"
                alt="Logo"
                className="inline-block mr-3 text-white md:w-14 w-11"
              />
              <span className="text-white font-light font-sans md:text-2xl text-lg">
                Elysium Sols
              </span>
            </a>

            {/* About Company */}
            {/* <p
              className={`text-white text-justify font-light pt-5 md:text-base text-sm`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text.
            </p> */}

            {/* Social Link */}
            <div className={`flex flex-row md:mt-5 mt-2`}>
              <a
                href="https://www.facebook.com/elysiumsols"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`w-6 h-6 mr-3 opacity-50 hover:opacity-100`}
                  src="/Images/Facebook_Icon.svg"
                  alt="facebook icon"
                />
              </a>
              <a
                href="https://twitter.com/ElysiumSols"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`w-6 h-6 mr-3 opacity-50 hover:opacity-100`}
                  src="/Images/Twitter_Icon.svg"
                  alt="twitter icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/elysiumsols/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`w-6 h-6 mr-3 opacity-50 hover:opacity-100`}
                  src="/Images/LinkedIn_Icon.svg"
                  alt="linkedin icon"
                />
              </a>
              <a
                href="https://www.instagram.com/elysiumsols/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`w-6 h-6 mr-3 opacity-50 hover:opacity-100`}
                  src="/Images/Instagram_Icon.svg"
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div className={`flex-1 items-center md:mt-0 mt-6`}>
            <h3 className="text-white font-sans w-44 mx-auto md:text-2xl text-xl">
              Site Map
            </h3>
            <div
              className={`flex flex-row text-white md:mt-5 mt-2 md:justify-center justify-start md:text-base text-sm`}
            >
              <ul>
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#home"
                >
                  <li className={`mb-3 font-light`}>Home</li>
                </Link>
                <Link
                  to={"aboutUs"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#about"
                >
                  <li className={`mb-3 font-light`}>About Us</li>
                </Link>
                <Link
                  to={"services"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#services"
                >
                  <li className={`mb-3 font-light`}>Services</li>
                </Link>
                <Link
                  to={"process"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#process"
                >
                  <li className={`font-light`}>Process</li>
                </Link>
              </ul>
              <ul className={`ml-10 font-light`}>
                <Link
                  to={"portfolio"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#portfolio"
                >
                  <li className={`mb-3 font-light`}>Portfolio</li>
                </Link>
                <Link
                  to={"clients"}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="#clients"
                >
                  <li className={`font-light`}>Clients</li>
                </Link>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className={`flex-1 md:mt-0 mt-6`}>
            <h3 className="text-white font-sans md:text-2xl text-xl">
              Contact
            </h3>
            <div
              className={`flex flex-col text-white md:mt-5 mt-2 md:text-base text-sm gap-4`}
            >
              {/* <div>
                <div className={`flex flex-row`}>
                  <span className={``}>Head Office:</span>
                  <span className={`ml-3 font-light flex-1`}>
                    6321 7th Ave Brooklyn, NY 11220
                  </span>
                </div>
                <div className={`mt-4 flex flex-row`}>
                  <span className={``}>Contact:</span>
                  <span className={`ml-4 font-light flex-1`}>
                    <a href="tel:(929) 299-2450">(929) 299-2450</a>
                  </span>
                </div>
              </div> */}
              <div>
                <div className={`flex flex-row`}>
                  <span className={``}>Office:</span>
                  <span className={`ml-3 font-light flex-1`}>
                    Flat No. 2, 3rd Floor, Plaza 177, Phase 7 Bahria Town
                    Springs North Commercial, Islamabad
                  </span>
                </div>
                <div className={`mt-4 flex flex-row`}>
                  <span className={``}>Contact:</span>
                  <span className={`ml-4 font-light flex-1`}>
                    <a href="tel:+923360093061">+92-336-0093061</a>
                  </span>
                </div>
              </div>
              <div className={`mt-2 flex flex-row`}>
                <span className={``}>Email:</span>
                <span className={`ml-9 font-light flex-1`}>
                  <a href="mailto:elysiumsols@gmail.com">
                    info@elysiumsols.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomTag />
    </div>
  );
};

export default Footer;

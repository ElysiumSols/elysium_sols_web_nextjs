// React Import
import React, { useState, useRef } from "react";
import axios from "axios";
// Components Import
import MultiStepFormIndicator from "../multiStepFormIndicator/multiStepFormIndicator";
import MultiSelectButton from "../multiSelectButton/multiSelectButton";

// Style Import
import classes from "./multiStepForm.module.css";

const MultiStepForm = ({ dismissForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentStepIndicator, setCurrentStepIndicator] = useState(1);
  const [defineTechnologies, setDefineTechnologies] = useState(false);
  const [error, setError] = useState([]);

  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [services, setServices] = useState([]);

  const [technologies, setTechnologies] = useState([]);

  const nameRef = useRef(null);
  const contactNumberRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);
  const technologiesList = useRef(null);
  const toggleButton = useRef(null);
  const finalPageRef = useRef(null);

  const animationSlideY = (add, remove, translateValue) => {
    add.style.display = "block";
    if (finalPageRef.current.style.display === "block")
      finalPageRef.current.style.display = "flex";

    add.style.transform = "translateY(" + translateValue + "px)";

    add.animate([{ opacity: 1, transform: "translateY(-30px)" }], {
      duration: 700,
      iterations: 1,
      easing: "ease-in-out",
    }).onfinish = (e) => {
      e.target.effect.target.style.opacity = 1;
      e.target.effect.target.style.transform = "translateY(-40px)";
    };

    remove.animate(
      [{ opacity: 0, transform: "translateY(" + -translateValue + "px)" }],
      {
        duration: 700,
        iterations: 1,
        easing: "ease-in-out",
      }
    ).onfinish = (e) => {
      e.target.effect.target.style.opacity = 0;
      e.target.effect.target.style.transform = "translateY(0)";
      e.target.effect.target.style.display = "none";
    };
  };

  const changeStep = async (type) => {
    if (currentStep === 1) {
      if (type === "f") {
        if (nameRef.current.value === "")
          setError((error) => [...error, "fName"]);
        if (nameRef.current.value === "") return;
        if (nameRef.current.value !== "")
          setError((error) => [...error].filter((val) => val !== "fName"));
      }

      setError((error) => [...error].filter((val) => val !== "fName"));

      setCurrentStep(type === "f" ? 2 : 1);
      const translateValinPage1 = 100 + page1Ref.current.offsetHeight;

      setContactInfo({
        fullName: nameRef.current.value,
        contactNumber: "",
        email: "",
        message: "",
      });

      setCurrentStepIndicator(type === "f" ? 2 : 1);
      animationSlideY(page2Ref.current, page1Ref.current, translateValinPage1);
    }

    if (currentStep === 2) {
      if (type === "f") {
        if (
          emailRef.current.value === "" &&
          contactNumberRef.current.value === ""
        )
          setError((error) => [...error, "cContact"]);
        if (
          emailRef.current.value === "" &&
          contactNumberRef.current.value === ""
        )
          return;
        if (
          emailRef.current.value !== "" ||
          contactNumberRef.current.value !== ""
        )
          setError((error) => [...error].filter((val) => val !== "cContact"));
      }

      setError((error) => [...error].filter((val) => val !== "cContact"));

      setCurrentStep(type === "f" ? 3 : 1);
      const nextStepinPage2 =
        type === "f" ? page3Ref.current : page1Ref.current;
      const translateValinPage2 =
        type === "f"
          ? 100 + page2Ref.current.offsetHeight
          : 0 - (100 + page2Ref.current.offsetHeight);

      setContactInfo({
        fullName: nameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        email: emailRef.current.value,
        message: "",
      });

      setCurrentStepIndicator(type === "f" ? 3 : 1);
      animationSlideY(nextStepinPage2, page2Ref.current, translateValinPage2);
    }

    if (currentStep === 3) {
      if (type === "f") {
        if (services.length === 0) setError((error) => [...error, "noService"]);
        if (services.length === 0) return;
        if (services.length !== 0)
          setError((error) => [...error].filter((val) => val !== "noService"));
      }

      setError((error) => [...error].filter((val) => val !== "noService"));

      setCurrentStep(type === "f" ? 4 : 2);
      const nextStepinPage3 =
        type === "f" ? page4Ref.current : page2Ref.current;
      const translateValinPage3 =
        type === "f"
          ? 100 + page3Ref.current.offsetHeight
          : 0 - (100 + page3Ref.current.offsetHeight);

      setCurrentStepIndicator(type === "f" ? 4 : 2);
      animationSlideY(nextStepinPage3, page3Ref.current, translateValinPage3);
    }

    if (currentStep === 4) {
      if (type === "f" || type === "r") {
        setDefineTechnologies(false);
        setCurrentStep(type === "f" ? 6 : 3);
        const nextStepinPage4 =
          type === "f" ? page6Ref.current : page3Ref.current;
        const translateValinPage4 =
          type === "f"
            ? 100 + page4Ref.current.offsetHeight
            : 0 - (100 + page4Ref.current.offsetHeight);

        setCurrentStepIndicator(type === "f" ? 6 : 3);
        animationSlideY(nextStepinPage4, page4Ref.current, translateValinPage4);
      }

      if (type === "toggle") {
        setDefineTechnologies(true);
        setCurrentStep(5);
        const nextStepinPage4 = page5Ref.current;
        const translateValinPage4 =
          type === "f" || type === "toggle"
            ? 100 + page4Ref.current.offsetHeight
            : 0 - (100 + page4Ref.current.offsetHeight);

        setCurrentStepIndicator(4);
        animationSlideY(nextStepinPage4, page4Ref.current, translateValinPage4);
      }
    }

    if (currentStep === 5) {
      if (type === "f") {
        if (technologies.length === 0)
          setError((error) => [...error, "noTechnologies"]);
        if (technologies.length === 0) return;

        if (technologies.length !== 0)
          setError((error) =>
            [...error].filter((val) => val !== "noTechnologies")
          );
      }

      setError((error) => [...error].filter((val) => val !== "noTechnologies"));

      setCurrentStep(type === "f" ? 6 : 4);
      const nextStepinPage5 =
        type === "f" ? page6Ref.current : page4Ref.current;
      const translateValinPage5 =
        type === "f"
          ? 100 + page5Ref.current.offsetHeight
          : 0 - (100 + page5Ref.current.offsetHeight);

      setCurrentStepIndicator(type === "f" ? 6 : 4);
      animationSlideY(nextStepinPage5, page5Ref.current, translateValinPage5);
    }

    if (currentStep === 6) {
      setCurrentStep(
        type === "f" || type === "s" ? 7 : defineTechnologies === true ? 5 : 4
      );
      const nextStepinPage6 =
        type === "f" || type === "s"
          ? finalPageRef.current
          : defineTechnologies === true
          ? page5Ref.current
          : page4Ref.current;
      const translateValinPage6 =
        type === "f" || type === "s"
          ? 100 + page6Ref.current.offsetHeight
          : 0 - (100 + page6Ref.current.offsetHeight);

      setCurrentStepIndicator(type === "f" || type === "s" ? 7 : 4);

      if (type === "f" || type === "s") {
        setContactInfo({
          fullName: nameRef.current.value,
          contactNumber: contactNumberRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        });
      }

      animationSlideY(nextStepinPage6, page6Ref.current, translateValinPage6);
    }

    if (currentStep === 7) {
      const servicesSelected = services.join().toString();
      const technologiesSelected = technologies.join().toString();

      try {
        await axios.post("https://api.elysiumsols.com/api/formData/", {
          name: contactInfo.fullName,
          phone: contactInfo.contactNumber,
          email: contactInfo.email,
          message: contactInfo.message,
          services: servicesSelected,
          technologies: technologiesSelected,
          submitedOn: new Date().toLocaleString("en-GB").split(",")[0],
        });
      } catch (e) {
        console.log(e);
      }

      setCurrentStepIndicator(1);
      setCurrentStep(1);
      dismissForm();
    }
  };

  const addService = (value, insert) => {
    if (insert === true) setServices((val) => [...val, value]);
    if (insert === false)
      setServices((val) => [...val].filter((val) => val !== value));
  };

  const addTechnology = (value, insert) => {
    if (insert === true) setTechnologies((val) => [...val, value]);
    if (insert === false)
      setTechnologies((val) => [...val].filter((val) => val !== value));
  };

  const dispPage = { opacity: 1, transform: "translateY(-40px)" };
  const hidePage = { opacity: 0, transform: "translateY(0)", display: "none" };

  const page1 = (
    <div
      ref={page1Ref}
      className={`px-3 w-full absolute left-0`}
      style={dispPage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} mr-auto`}>
          <span>Hello!</span> what is your name?
        </h4>
        <div className={`w-full mt-3`}>
          <input
            ref={nameRef}
            type="text"
            placeholder="*Full Name"
            className={`${classes.input} ${
              error.includes("fName") && classes.errorBorderColor
            }`}
          />
          {error.includes("fName") && (
            <p className={`${classes.error}`}>Name is required!</p>
          )}
        </div>

        <div className={`mt-5 md:block flex justify-center items-center`}>
          <button
            className={`${classes.actionBTNRight}`}
            onClick={() => changeStep("f")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page2 = (
    <div
      ref={page2Ref}
      className={`px-3 w-full absolute left-0`}
      style={hidePage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} mr-auto`}>
          {contactInfo.fullName}, how can we <span>contact</span> you?
        </h4>
        {error.includes("cContact") && (
          <p className={`${classes.error}`}>
            Atleast any one means of contact is required!
          </p>
        )}

        <div className={`flex lg:flex-row flex-col mt-5`}>
          <div className={`w-full mt-3`}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className={`${classes.input} ${
                error.includes("cContact") && classes.errorBorderColor
              }`}
            />
          </div>
          <div className={`w-full mt-3`}>
            <input
              ref={contactNumberRef}
              type="tel"
              placeholder="Contact Number"
              className={`${classes.input} ${
                error.includes("cContact") && classes.errorBorderColor
              }`}
            />
          </div>
        </div>

        <div
          className={`mt-5 flex md:flex-row flex-col md:justify-start justify-center items-center`}
        >
          <button
            className={`${classes.actionBTNLeft} md:mr-3 mr-0`}
            onClick={() => changeStep("r")}
          >
            Previous
          </button>
          <button
            className={`${classes.actionBTNRight} md:mt-0 mt-2`}
            onClick={() => changeStep("f")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page3 = (
    <div
      ref={page3Ref}
      className={`px-3 w-full absolute left-0`}
      style={hidePage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} inline-block`}>
          {contactInfo.fullName}, which <span>service</span> you want to avail?
        </h4>

        {error.includes("noService") && (
          <p className={`${classes.error}`}>Atleast one is required!</p>
        )}
        <div
          className={`mt-5 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-4 gap-2`}
        >
          <MultiSelectButton
            selected={services.includes("Web Developement")}
            content={"Web Developement"}
            onPress={(active) => addService("Web Developement", active)}
          />
          <MultiSelectButton
            selected={services.includes("Mobile Developement")}
            content={"Mobile Developement"}
            onPress={(active) => addService("Mobile Developement", active)}
          />
          <MultiSelectButton
            selected={services.includes("Data Engineering")}
            content={"Data Engineering"}
            onPress={(active) => addService("Data Engineering", active)}
          />
          <MultiSelectButton
            selected={services.includes("Software Integration")}
            content={"Software Integration"}
            onPress={(active) => addService("Software Integration", active)}
          />
          <MultiSelectButton
            selected={services.includes("DevOps & Infrastructure")}
            content={"DevOps & Infrastructure"}
            onPress={(active) => addService("DevOps & Infrastructure", active)}
          />
          <MultiSelectButton
            selected={services.includes("Other")}
            content={"Other"}
            onPress={(active) => addService("Other", active)}
          />
        </div>

        <div
          className={`mt-5 flex md:flex-row flex-col md:justify-start justify-center items-center`}
        >
          <button
            className={`${classes.actionBTNLeft} md:mr-3 mr-0`}
            onClick={() => changeStep("r")}
          >
            Previous
          </button>
          <button
            className={`${classes.actionBTNRight} md:mt-0 mt-2`}
            onClick={() => changeStep("f")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page4 = (
    <div
      ref={page4Ref}
      className={`px-3 w-full absolute left-0`}
      style={hidePage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} mr-auto`}>
          Would you like to select <span>technology</span> stacks of your
          application?
        </h4>

        <div
          className={`mt-5 flex md:flex-row flex-col md:justify-start justify-center items-center`}
        >
          <button
            className={`${classes.actionBTNLeft} md:mr-3 mr-0`}
            onClick={() => changeStep("r")}
          >
            Previous
          </button>
          <button
            ref={toggleButton}
            className={`${classes.actionBTNRight} md:mr-3 mr-0 md:mt-0 mt-2`}
            onClick={() => changeStep("toggle")}
          >
            Yes
          </button>
          <button
            className={`${classes.actionBTNRight} md:mt-0 mt-2`}
            onClick={() => changeStep("f")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );

  const page5 = (
    <div
      ref={page5Ref}
      className={`px-3 w-full absolute left-0`}
      style={hidePage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} mr-auto`}>
          List of <span>technologies</span> you can choose from:
        </h4>
        {error.includes("noTechnologies") && (
          <p className={`${classes.error}`}>Atleast one is required!</p>
        )}
        <div
          ref={technologiesList}
          className={`mt-5 mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 xl:gap-4 gap-2`}
        >
          <MultiSelectButton
            selected={technologies.includes("Other")}
            content={"Javascript"}
            onPress={(active) => addTechnology("Javascript", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("React JS")}
            content={"React JS"}
            onPress={(active) => addTechnology("React JS", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Node JS")}
            content={"Node JS"}
            onPress={(active) => addTechnology("Node JS", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("HTML/CSS")}
            content={"HTML/CSS"}
            onPress={(active) => addTechnology("HTML/CSS", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Php")}
            content={"Php"}
            onPress={(active) => addTechnology("Php", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Angular")}
            content={"Angular"}
            onPress={(active) => addTechnology("Angular", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("React Native")}
            content={"React Native"}
            onPress={(active) => addTechnology("React Native", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("AWS")}
            content={"AWS"}
            onPress={(active) => addTechnology("AWS", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Android")}
            content={"Android"}
            onPress={(active) => addTechnology("Android", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Bootstrap 4/5")}
            content={"Bootstrap 4/5"}
            onPress={(active) => addTechnology("Bootstrap 4/5", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("TypeScript")}
            content={"TypeScript"}
            onPress={(active) => addTechnology("TypeScript", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("MySQL")}
            content={"MySQL"}
            onPress={(active) => addTechnology("MySQL", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("SQL")}
            content={"SQL"}
            onPress={(active) => addTechnology("SQL", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Java")}
            content={"Java"}
            onPress={(active) => addTechnology("Java", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("iOS")}
            content={"iOS"}
            onPress={(active) => addTechnology("iOS", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Swift")}
            content={"Swift"}
            onPress={(active) => addTechnology("Swift", active)}
          />
          <MultiSelectButton
            selected={technologies.includes("Other")}
            content={"Other"}
            onPress={(active) => addTechnology("Other", active)}
          />
        </div>

        <div
          className={`mt-5 flex md:flex-row flex-col md:justify-start justify-center items-center`}
        >
          <button
            className={`${classes.actionBTNLeft} md:mr-3 mr-0`}
            onClick={() => changeStep("r")}
          >
            Previous
          </button>
          <button
            className={`${classes.actionBTNRight} md:mt-0 mt-2`}
            onClick={() => changeStep("f")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page6 = (
    <div
      ref={page6Ref}
      className={`px-3 w-full absolute left-0`}
      style={hidePage}
    >
      <div className={`lg:w-3/4 w-full mx-auto`}>
        <h4 className={`${classes.title} mr-auto`}>
          {contactInfo.fullName}, do you want to leave any <span>message</span>{" "}
          for us?
        </h4>
        <div className={`w-full mt-3`}>
          {/* <input ref={messageRef} type="text" placeholder="*Full Name" className={`${classes.input}`} /> */}
          <textarea
            ref={messageRef}
            placeholder="Message..."
            className={`resize-none w-full h-52 text-base ${classes.input}`}
          ></textarea>
        </div>

        <div
          className={`mt-5 flex md:flex-row flex-col md:justify-start justify-center items-center`}
        >
          <button
            className={`${classes.actionBTNLeft} md:mr-3 mr-0`}
            onClick={() => changeStep("r")}
          >
            Previous
          </button>
          <button
            className={`${classes.actionBTNRight} md:mt-0 mt-2`}
            onClick={() => changeStep("f")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );

  const finalPage = (
    <div
      ref={finalPageRef}
      className={`px-3 w-full absolute flex-col justify-center items-center left-0 ${classes.maxSizeAllPages}`}
      style={hidePage}
    >
      <div
        className={`lg:w-1/2 w-full h-full mx-auto flex flex-col justify-center`}
      >
        <h1 className={`${classes.finalTitle}`}>Thank you!</h1>
        <p className={`${classes.subTitle}`}>
          Thank you for reaching out to us.
        </p>
        <p className={`${classes.subTitle}`}>
          We&apos;ll get back to you shortly after evaluating your request.
        </p>
        <div className={`mt-5`}>
          <button
            className={`${classes.actionBTNRight}`}
            onClick={() => changeStep("f")}
          >
            OKAY
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center`}>
      <MultiStepFormIndicator
        activeCount={currentStepIndicator}
        showStep4={defineTechnologies}
      />
      <div
        className={`w-full h-full flex flex-col justify-center lg:overflow-hidden overflow-y-auto relative items-center bg-white`}
      >
        <form
          name="contact_form"
          id="contact_form"
          data-netlify="true"
          onSubmit={(e) => e.preventDefault()}
        >
          {page1}
          {page2}
          {page3}
          {page4}
          {page5}
          {page6}
          {finalPage}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;

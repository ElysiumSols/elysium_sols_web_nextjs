// React Import
import React from "react";

// Plugin Imports
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// Configuration File Import
import particleConfig from "./particle_config";

// Import Styles
import classes from "./ParticleBackground.module.css";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      style={{ position: "absolute !important" }}
      init={particlesInit}
      className={classes.canvasStyle}
      params={particleConfig}
    />
  );
};

export default ParticleBackground;

import React from "react";

import hero_image from "../../Assets/img/secondary_image3.jpg";

const UnderConstruction = () => {
  return (
    <section className="hero">
      <div className="hero__block hero__block--overlay">
        <span className="centered__text centered__text--regular">
          This page is under construction.
        </span>
        <span className="centered__text centered__text--small">
          Sorry, check back later!
        </span>
      </div>
      <div className="hero__block">
        <img className="hero__image" src={hero_image} alt="Hero" />
      </div>
    </section>
  );
};

export default UnderConstruction;

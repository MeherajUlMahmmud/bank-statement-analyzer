import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <section className="heroSection" >
      <div className="heroSection__content">
        <p className="heroSection__content__headerText">
          Unlock your digital brain with supermemory
        </p>

        <span className="heroSection__content__descText">
          Supermemory is your ultimate hub for organizing, searching, and
          utilizing saved information with powerful tools like a search engine,
          writing assistant, and canvas.
        </span>

        <button className="heroSection__content__button">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div
      className="heroSection"
      style={{
        backgroundColor: "#253043",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b6b6b' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)",
      }}
    >
      <div className="heroSection__content">
        <h1 className="heroSection__content__headerText">
          Unlock your digital brain with supermemory
        </h1>

        <span className="heroSection__content__descText">
          Supermemory is your ultimate hub for organizing, searching, and
          utilizing saved information with powerful tools like a search engine,
          writing assistant, and canvas.
        </span>

        <button className="heroSection__content__button">
          it's free. Sign up now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

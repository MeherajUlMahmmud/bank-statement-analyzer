import React from "react";
import "./contectSection.scss";

const ContectSection = () => {
  const infoCards = [
    {
      title: "Save your notes",
      head: "ideation",
      desc: "Save your notes, files, and more with our note-taking app.",
      icon: "📝",
    },
    {
      title: "Save your files",
      head: "ideation",
      desc: "Save your files, documents, and more with our file-sharing app.",
      icon: "📁",
    },
    {
      title: "Save your photos",
      head: "ideation",
      desc: "Save your photos, videos, and more with our photo-sharing app.",
      icon: "📷",
    },
  ];

  return (
    <div className="contectSection">
      <div className="contectSection__mask"></div>
      <div className="contectSection__content">
        <div className="headerDesc">
          <h1>
            Supermemory <br /> remembers everything.
          </h1>

          <span>
            ... so you don't have to. Whether you're a student, a professional,
            or just a person on the the internet. we got you covered.
          </span>
        </div>

        <div className="infoCards">
          {infoCards.map((item, index) => {
            return (
              <div key={index} className="infoCards__card">
                <div className="infoCards__card__icon">{item.icon}</div>
                <div className="infoCards__card__head">{item.head}</div>
                <div className="infoCards__card__title">{item.title}</div>
                <div className="infoCards__card__desc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContectSection;

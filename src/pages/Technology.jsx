import React, { useEffect, useState } from "react";
import { technology } from "../data.json";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const techs = document.querySelectorAll(".tab");
    techs.forEach((tech) => {
      tech.classList.remove("active");
    });
    techs[activeIndex].classList.add("active");
  }, [activeIndex]);

  return (
    <section className="technology-container">
      <h1 className="heading-title">
        <span>03</span>space launch 101
      </h1>
      <div className="technology-content">
        <div className="technology-content-container">
          <div className="technology-navigation-container">
            {technology.map((tech, index) => (
              <div
                key={index}
                className="tab"
                onClick={() => setActiveIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="technology-content-info">
            <h4>
              the terminology...<span>{technology[activeIndex].name}</span>
            </h4>
            <p>{technology[activeIndex].description}</p>
          </div>
        </div>
        <div className="technology-image-container">
          <picture>
            <source
              media="(max-width: 1100px)"
              srcSet={technology[activeIndex].images.landscape}
            />
            <img
              src={technology[activeIndex].images.portrait}
              alt={technology[activeIndex].name}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Technology;

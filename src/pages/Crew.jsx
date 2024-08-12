import React, { useState } from "react";
import { crew } from "../data.json";

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(2);

  return (
    <section className="crew-container">
      <h1 className="heading-title">
        <span>02</span>meet your crew
      </h1>
      <div className="crew-content">
        <div className="crew-info">
          <div className="crew-content-info">
            <h2>
              <span>{crew[currentCrew].role}</span>
              {crew[currentCrew].name}
            </h2>
            <p>{crew[currentCrew].bio}</p>
          </div>
          <div className="crew-content-navigation">
            <div className="tab"></div>
            <div className="tab"></div>
            <div className="tab"></div>
            <div className="tab"></div>
          </div>
        </div>
        <div className="crew-image">
          <img
            src={crew[currentCrew].images.webp}
            alt={crew[currentCrew].name}
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;

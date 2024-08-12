import React, { useState } from "react";
import { destinations } from "../data.json";

const Destination = () => {
  const [planetNumber, setPlanetNumber] = useState(1);

  const changeTab = (e, number) => {
    setPlanetNumber(number);
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("destination-active");
    });
    e.target.classList.add("destination-active");
  };

  return (
    <section className="destination-container">
      <h1 className="heading-title">
        <span>01</span> pick your destination
      </h1>
      <div className="planet-container">
        <div className="planet-image">
          <img
            src={destinations[planetNumber].images.png}
            alt={destinations[planetNumber].name}
          />
        </div>
        <div className="planets-content">
          <div className="planet-content-navigation">
            <div className="tab" onClick={(e) => changeTab(e, 0)}>
              moon
            </div>
            <div
              className="tab destination-active"
              onClick={(e) => changeTab(e, 1)}
            >
              mars
            </div>
            <div className="tab" onClick={(e) => changeTab(e, 2)}>
              europa
            </div>
            <div className="tab" onClick={(e) => changeTab(e, 3)}>
              titan
            </div>
          </div>
          <div className="planet-content-info">
            <h2>{destinations[planetNumber].name}</h2>
            <p className="planet-description">
              {destinations[planetNumber].description}
            </p>
            <hr />
            <div className="planet-content-info-details">
              <p className="distance-info">
                avg. distance
                <span>{destinations[planetNumber].distance}</span>
              </p>
              <p className="travel-time-info">
                est. travel time
                <span>{destinations[planetNumber].travel}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;

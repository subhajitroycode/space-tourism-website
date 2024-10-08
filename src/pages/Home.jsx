import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container">
      <div className="hero-container">
        <div className="home-content">
          <h1 className="home-title">
            So, you want to travel to
            <span>Space</span>
          </h1>
          <p className="home-description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-container">
          <div className="explore-content">
            <NavLink to="/destination">Explore</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

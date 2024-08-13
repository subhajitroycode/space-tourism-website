import React, { useState } from "react";
import { crew } from "../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Crew = () => {
  // const [currentCrew, setCurrentCrew] = useState(2);

  return (
    <section className="crew-container">
      <h1 className="heading-title">
        <span>02</span>meet your crew
      </h1>
      <Swiper
        slidesPerView={1}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        modules={[Pagination, Keyboard]}
      >
        {/* <div className="crew-info">
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
        </div> */}
        {crew.map((member, id) => {
          return (
            <SwiperSlide key={id}>
              <div className="crew-content">
                <div className="crew-content-info">
                  <h2>
                    <span>{member.role}</span>
                    {member.name}
                  </h2>
                  <p>{member.bio}</p>
                </div>
                <div className="crew-image">
                  <img src={member.images.webp} alt={member.name} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Crew;

import React, { useState } from "react";
import { crew } from "../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Crew = () => {
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

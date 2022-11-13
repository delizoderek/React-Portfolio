import React from "react";
import MobileCard from "../../elements/Cards/MobileCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "./projects-container-mobile.scss";

function MobileContainer({ items }) {
  return (
    <div className="projects-container" style={{ minHeight: "100vh;" }}>
      <Swiper
        modules={[EffectCube]}
        className="swiper-container"
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="cube"
        grabCursor
        centeredSlides
      >
        {items.map((project, index) => {
          return (
            <SwiperSlide key={`SwiperSlide-${index}`} className="swiper-slider">
              <MobileCard key={`ProjectCard-${index}`} {...project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MobileContainer;

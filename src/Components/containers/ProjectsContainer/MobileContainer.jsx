import React from "react";
import MobileCard from "../../elements/Cards/MobileCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
import "./projects-container-mobile.scss";

function MobileContainer({ items }) {
	console.log(items?.size > 0)
  return (
    <div className="projects-container">
      <Swiper
        modules={[EffectCube, Pagination]}
        className="swiper-container"
        spaceBetween={50}
				pagination = {{
					type : 'progressbar'
				}}
        effect="cube"
        grabCursor
        centeredSlides
				loop={items?.size > 0}
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

import React from "react";
import { ProjectCard } from "../../elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "./projects-container-mobile.scss";

function MobileContainer({ items }) {

  return (
		<div className="projects-container" style={{minHeight:"100vh;"}}>
    <Swiper
      modules={[EffectCreative]}
			className="swiper-container"
			spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="creative"
      // style={{ minHeight: "450px" }}
        grabCursor
        centeredSlides
        coverflowEffect= {{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
    >
      {items.map((project, index) => {
        return (
          <SwiperSlide key={`SwiperSlide-${index}`} className="swiper-slider">
            <ProjectCard key={`ProjectCard-${index}`} {...project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
		</div>
  );
}

export default MobileContainer;

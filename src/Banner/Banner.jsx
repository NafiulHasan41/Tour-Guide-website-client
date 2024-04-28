import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[500px] rounded-xl shadow-2xl shadow-cyan-500/70"
      >
        <SwiperSlide>
          {" "}
          <div className=" w-full h-full">
            <div className="hero w-full h-full bg-cover" style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
              }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Slide><h1 className="mb-5 text-5xl font-bold">Hello there</h1></Slide>
                        <Fade>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut
                            assumenda excepturi exercitationem quasi. In deleniti eaque
                            aut repudiandae et a id nisi.
                        </p>
                        </Fade>
                        
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;

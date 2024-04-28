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
                  "url(https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar.jpg)",
              }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <Slide><h1 className="mb-5 text-5xl font-bold">Explore Southeast Asia</h1></Slide>
                        <Fade delay={1000}>
                        <p className="mb-5">
                            Southeast Asia is composed of eleven countries of impressive diversity in religion,
                             culture and history: Brunei, Burma (Myanmar), Cambodia, Timor-Leste, Indonesia, Laos, Malaysia, the Philippines,
                              Singapore, Thailand and Vietnam.
                        </p>
                        </Fade>
                      
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className=" w-full h-full">
            <div className="hero w-full h-full bg-cover" style={{
                backgroundImage:
                  "url(https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg)",
              }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Slide><h1 className="mb-5 text-5xl font-bold">Cox`s Bazar</h1></Slide>
                        <Fade delay={1000}>
                        <p className="mb-5">
                            Cox`s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
                             It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        </Fade>
                      
                    </div>
                </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className=" w-full h-full">
            <div className="hero w-full h-full bg-cover" style={{
                backgroundImage:
                  "url(https://xtntbd.com/wp-content/uploads/2023/08/c4fedab1-4041-4db5-9245-97439472cf2c.jpg)",
              }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Slide><h1 className="mb-5 text-5xl font-bold">Indonesia</h1></Slide>
                        <Fade delay={1000}>
                        <p className="mb-5">
                            Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.
                             It consists of over seventeen thousand islands, including Sumatra, Java, Borneo, Sulawesi, and New Guinea.
                        </p>
                        </Fade>
                      
                    </div>
                </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className=" w-full h-full">
            <div className="hero w-full h-full bg-center" style={{
                backgroundImage:
                  "url(https://static.toiimg.com/photo/107256233.cms)",
              }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Slide><h1 className="mb-5 text-5xl font-bold">Thailand</h1></Slide>
                        <Fade delay={1000}>
                        <p className="mb-5">
                            Thailand is a Southeast Asian country. It`s known for tropical beaches, opulent royal palaces,
                             ancient ruins and ornate temples displaying figures of Buddha. 
                        </p>
                        </Fade>
                      
                    </div>
                </div>
            </div>
          </div></SwiperSlide>
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

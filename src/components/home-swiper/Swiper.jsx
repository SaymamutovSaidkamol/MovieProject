import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import vector from "../../assets/Vector.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function HomeSwaper({ movies }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log("asd", movies);

  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 container "
      >
        {movies &&
          movies?.map((item) => (
            <SwiperSlide key={item.id} className="max-[700px]:px-4">
              <img src={url + item.backdrop_path} />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 className="text-3xl">Kung Fu Panda 4</h3>
                <ul className="flex gap-2 justify-center mb-4 mt-4">
                  <li>2024</li>
                  <li>Комедия</li>
                  <li>1ч 34м</li>
                  <li>EN</li>
                  <li>6+</li>
                </ul>
                <div className="flex justify-center items-center gap-[10px] w-[380px] h-[52px] rounded-[12px] bg-white text-[#C61F1F] cursor-pointer">
                  <img
                    src={vector}
                    alt=""
                    className="object-scale-down"
                    style={{ width: "15px", height: "18px" }}
                  />
                  <button className="cursor-pointer">Смотреть</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        // navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper border w-1/2"
      >
        {movies &&
          movies?.map((item) => (
            <SwiperSlide key={item.id} className="w-[108px] h-[64px] mb-[94px]">
              <img src={url + item.backdrop_path} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import vector from "../../assets/Vector.svg";
import "./style1.css";

export default function HomeSwaper({ movies }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const url = import.meta.env.VITE_IMAGE_URL;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperReady]);

  return (
    <div className="header-swaper container mx-auto">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={url + item.backdrop_path} className="transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1" />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-3xl">{item.original_title}</h3>
              <ul className="flex gap-2 justify-center mb-4 mt-4">
                <li>{item.release_date}</li>
                <li>1ч 34м</li>
                <li>EN</li>
                <li>6+</li>
              </ul>
              <div className="flex justify-center items-center gap-[10px] w-[380px] h-[52px] rounded-[12px] bg-white text-[#C61F1F] cursor-pointer">
                <img
                  src={vector}
                  alt=""
                  style={{ width: "15px", height: "18px" }}
                />
                <button className="cursor-pointer">Смотреть</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BUTTONLAR TASHQARIDA */}
      <div className="thumb-controls">
        <button ref={prevRef} className="custom-prev">
          <FaAngleLeft />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={url + item.backdrop_path} className="transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className="custom-next">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}


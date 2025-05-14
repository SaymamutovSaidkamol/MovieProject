import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaAngleRight  } from "react-icons/fa6";
import { FaAngleLeft  } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style3.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SingliMovieSwiper({ single }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const url = import.meta.env.VITE_IMAGE_URL;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="single-movie-swiper container mx-auto">
        <button ref={prevRef} className="custom-prev"><FaAngleLeft /></button>
        <button ref={nextRef} className="custom-next"><FaAngleRight  /></button>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{ type: "fraction" }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
          modules={[Pagination, Navigation]}
          className="mySwipeCard"
        >
          {single?.backdrops?.map((image) => (
            <SwiperSlide key={image.file_path}>
              <img className="w-[200px]  select-non rounded-t-2xl transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1" src={url + image.file_path} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

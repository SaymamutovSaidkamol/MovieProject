import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import "./style2.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Card from "../movie-view/Card";

export default function CardSwiper({ movies }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="card-swiper container mx-auto">
        <button ref={prevRef} className="custom-prev">
          <FaAngleLeft />
        </button>
        <button ref={nextRef} className="custom-next">
          <FaAngleRight />
        </button>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwipeCard border"
        >
          {movies?.map((item) => (
            <SwiperSlide className="text-white">
              <Card key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

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
            320: {
              // for mobile devices (320px - 480px)
              slidesPerView: 1,
            },
            480: {
              // for tablets (480px - 768px)
              slidesPerView: 2,
            },
            768: {
              // for larger tablets (768px - 1024px)
              slidesPerView: 3,
            },
            1024: {
              // for desktops (1024px and above)
              slidesPerView: 4,
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

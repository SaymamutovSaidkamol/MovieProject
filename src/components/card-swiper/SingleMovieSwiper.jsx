import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style3.css";
import { Pagination, Navigation } from "swiper/modules";

export default function SingliMovieSwiper({ single }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const url = import.meta.env.VITE_IMAGE_URL;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="single-movie-swiper container mx-auto">
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
          pagination={{ type: "fraction" }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            400: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwipeCard"
        >
          {single?.backdrops?.map((image) => (
            <SwiperSlide key={image.file_path}>
              <img
                className="w-[200px] cursor-pointer select-none rounded-t-2xl transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
                src={url + image.file_path}
                alt=""
                onClick={() => openModal(url + image.file_path)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && selectedImage && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 20px white",
            }}
          />
        </div>
      )}
    </>
  );
}

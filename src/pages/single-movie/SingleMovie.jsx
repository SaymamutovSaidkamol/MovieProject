import SingliMovieSwiper from "@/components/card-swiper/SingleMovieSwiper";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { memo, useState } from "react";
import { useParams } from "react-router-dom";

import { IoStarOutline } from "react-icons/io5";

import { FaRegEye } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { BiPurchaseTag } from "react-icons/bi";
import Notfound from "@/components/not-found/Notfound";
import Pagination from "@mui/material/Pagination";

const SingleMovie = () => {
  const url = import.meta.env.VITE_IMAGE_URL;

  const [page, setPage] = useState(1);

  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`, { page });

  console.log(similars?.total_pages);
  const handleChangePaganation = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col bg-[#1E1E1E] rounded-2xl text-white py-5">
        <div className="w-full h-1/2  overflow-hidden">
          <img
            src={url + data?.backdrop_path}
            className="w-full rounded-t-2xl transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
            alt=""
          />
        </div>
        <div className="w-1/2 px-4 flex flex-col gap-7 mt-5 justify-center">
          <h1 className="text-6xl font-bold">{data?.title}</h1>
          <p className="font-bold text-[17px]">{data?.overview}</p>
          <p className="flex gap-1 items-center">
            <IoStarOutline className="text-[#C61F1F]" /> {data?.vote_average}
          </p>
          <strong className="flex gap-1.5 items-center">
            <GrMoney className="text-[#C61F1F]" />
            {data?.budget?.toLocaleString()} USD
          </strong>
          <div className="flex gap-1.5 items-center">
            <BsGlobeAmericas className="text-[#C61F1F]" />
            {data?.origin_country?.map((country) => (
              <span key={country}>{country}</span>
            ))}
          </div>
          <div className="flex gap-1.5 py-2 items-center">
            <BiPurchaseTag className="text-[#C61F1F] w-[20px] h-[20px]" />
            {data?.genres?.map((genre) => (
              <span className="px-2 py-0.5 bg-[#C61F1F] text-white rounded-[8px]">
                #{genre.name}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5 items-center">
            <FaRegEye className="text-[#C61F1F]" />
            {data?.popularity}
          </div>
          <div className="flex gap-1">
            <strong className="text-[#C61F1F]">
              {" "}
              Manufacturing Companies:{" "}
            </strong>
            {data?.production_companies?.map((company) => (
              <span>{company.name}</span>
            ))}
          </div>
          <div className="flex gap-1">
            <strong className="text-[#C61F1F]">Production Countries: </strong>
            {data?.production_countries?.map((company_country) => (
              <span>{company_country.name}</span>
            ))}
          </div>
          <p>
            <strong className="text-[#C61F1F]">Release Date: </strong>
            {data?.release_date}
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col overflow-auto py-5  gap-2.5 mt-25">
        <strong className="text-white text-4xl cursor-pointer hover:text-[#C61F1F]">
          Movie Stills
        </strong>
        <SingliMovieSwiper single={images} />
      </div>

      <div className="container mx-auto mt-25 flex flex-col gap-7">
        <strong className="text-white text-4xl cursor-pointer hover:text-[#C61F1F]">
          Similar Movies
        </strong>
        {similars?.results?.slice(0, 4).length === 0 ? (
          <Notfound />
        ) : (
          <>
            <MovieView movies={similars?.results?.slice(0, 4)} />
            <div className="flex justify-center items-center">
              <Pagination
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#f87171",
                    borderColor: "#f87171",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#C61F1F",
                    color: "white",
                    "&:hover": {
                      // backgroundColor: "white",
                      color: "#C61F1F",
                    },
                  },
                }}
                count={
                  similars?.total_pages >= 500 ? 500 : similars?.total_pages
                }
                onChange={handleChangePaganation}
                color="#C61F1F"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default memo(SingleMovie);

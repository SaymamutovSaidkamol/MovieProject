import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {

  const navigate = useNavigate()

  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="text-white rounded-[12px] mb-7 bg-[#1E1E1E]">
      <div className="overflow-hidden">
        <img
          src={url + item.poster_path}
          alt=""
          className="rounded-[12px] mb-[12px] w-full h-ful transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1l"
          onClick={()=> navigate(`/movie/${item.id}`)}
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-3 py-3">
        <h3 className="text-[24px] font-bold">{item.title}</h3>
        <div className="flex gap-2 items-center text-yellow-600 font-bold text-[18px]">
          <IoStarOutline className="text-[#C61F1F]" />
          <p>{item.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

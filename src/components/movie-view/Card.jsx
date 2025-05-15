import React, { memo } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {

  const navigate = useNavigate()

  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="text-white rounded-[12px] mb-7 bg-[#1E1E1E] relative">
      <div className="overflow-hidden">
        <img
          src={url + item.poster_path}
          alt={item.title}
          className="rounded-[12px] mb-[12px] w-full h-ful transform transition-transform duration-500 hover:scale-105 h-[420px] hover:-translate-y-1l"
          onClick={()=> navigate(`/movie/${item.id}`)}
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-3 py-3">
        <h3 className="text-[24px] font-bold">{item.title}</h3>
        <div className="flex gap-1 rounded-2xl items-center text-white py-1 px-1 font-bold text-[18px] bg-[#C61F1F] absolute top-[10px] right-[10px]">
          <FaStar className="text-yellow-300" />
          <p>{item.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);

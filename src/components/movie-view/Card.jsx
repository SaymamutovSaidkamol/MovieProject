import React from "react";
import { HiTrendingUp } from "react-icons/hi";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="text-white rounded-[12px] mb-7">
      <div className="">
        <img src={url + item.poster_path} alt="" className="rounded-[12px] mb-[12px] w-full h-full"/>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[24px] font-bold">{item.title}</h3>
        <div className="flex gap-2 items-center text-[#4D4D4D] font-bold text-[18px]">
          <HiTrendingUp />
          <p>{item.vote_average}</p>
        </div>
      </div>

    </div>
  );
};

export default Card;

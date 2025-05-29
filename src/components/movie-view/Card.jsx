import React, { memo, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useContextValue } from "@/context";

const Card = ({ item }) => {
  const [state, dispatch] = useContextValue();

  const url = import.meta.env.VITE_IMAGE_URL;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = url + item.poster_path;
    img.onload = () => setIsLoaded(true);
  }, [item.poster_path, url]);

  const navigate = useNavigate();

  return (
    <div className="text-white rounded-[12px] mb-7 bg-[#1E1E1E] relative w-full h-[500px] overflow-hidden max-[700px]:w-[160px] max-[700px]:h-[270px] ">
      <div
        className="h-full w-full cursor-pointer relative"
        style={{
          backgroundImage: isLoaded ? `url(${url + item.poster_path})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => navigate(`/movie/${item.id}`)}
      ></div>
      <button
        onClick={() => dispatch({ type: "SAVED_MOVIE", payload: item })}
        className="top-[5px] left-1 p-2 absolute z-10 rounded-[50%] max-[700px]:text-[20px] bg-[#b8b5b5]"
      >
        {state.saved.some(({ id }) => id === item.id) ? (
          <FaBookmark className=" text-3xl text-[#C61F1F] max-[700px]:text-[20px]" />
        ) : (
          <FaRegBookmark className="  text-3xl text-white max-[700px]:text-[20px] hover:text-[#C61F1F]" />
        )}
      </button>
      <div className="absolute top-[10px] right-[10px] z-20 bg-[#ffff00] text-[#4D4D4D] text-[18px] font-bold px-2 rounded-[5px] flex items-center gap-1 max-[700px]:text-[16px]">
        <FaStar className="text-[#b8a502]" />
        <p>{item.vote_average}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black/100 via-black/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full px-4 py-5 z-20 flex flex-col gap-3">
        <h3 className="text-[24px] font-bold max-[700px]:text-[18px]">
          {item.title}
        </h3>
        <p className="text-[#4D4D4D] max-[700px]:text-[12px] font-bold">{item.release_date}</p>
      </div>
    </div>
  );
};

export default memo(Card);

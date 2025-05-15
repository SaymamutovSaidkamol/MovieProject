import { useFetch } from "@/hooks/useFetch";
import React, { memo } from "react";
import { RiCloseFill } from "react-icons/ri";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  // const slicedData = data?.genres?.slice(9);

  // console.log(slicedData);

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto py-4 flex gap-6 overflow-auto scrollbar-hide mb-[48px]">
      {data?.genres?.map((genre) => (
        <div
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString())
              ? "bg-[#C61F1F] text-white"
              : "bg-[#111111]"
          } text-nowrap cursor-pointer select-none px-4 rounded-2xl text-white  h-[48px] flex gap-2 justify-center items-center`}
          key={genre.id}
        >
          {genre.name}
          {array.includes(genre.id.toString()) ? (
            <RiCloseFill className=" h-[38px] w-[30px]" />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(Genres);

import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import Skeleton from "../skeleton/Skeleton";

const Genres = ({ setGanre }) => {
  const { data, error, loading } = useFetch("/genre/movie/list");
  const [activeGanre, setActiveGanre] = useState(null);

  return (
    <>
      <div className="container mx-auto py-4 mb-10">
        <ul className={`flex gap-2 overflow-auto px-5 py-5 border rounded-[5px] scrollbar-hide`}>
          {data?.genres?.map((ganre) => (
            <li
              onClick={() => {
                setGanre(ganre.id.toString());
                setActiveGanre(ganre.id);
              }}
              key={ganre.id}
              className={`text-nowrap  rounded-[12px] text-white select-none cursor-pointer px-[32px] py-[12px] text-center ${
                activeGanre === ganre.id
                  ? "bg-[#C61F1F]"
                  : "bg-[#111111]"
              }`}
            >
              {ganre.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Genres;

import React from "react";
import { useFetch } from "@/hooks/useFetch";
import MovieView from "@/components/movie-view/MovieView";
import HomeSwaper from "@/components/home-swiper/Swiper";
import CardSwiper from "@/components/card-swiper/CardSwiper";
import Skeleton from "@/components/skeleton/Skeleton";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie", {skip: 8});

  const slicedData = data?.results?.slice(9)
  // console.log(slicedData);
  

  return (
    <div>
      <HomeSwaper movies={slicedData  } />
      <div className="text-white container mx-auto flex justify-between mb-15px]">
        <div className="w-full flex justify-between px-8">
          <h1 className="text-[20px]">На неделе</h1>
          <h1 className="text-[20px] text-[#C61F1F]">{`Показать все >`}</h1>
        </div>
      </div>
      <CardSwiper movies={slicedData  } />
    </div>
  );
};

export default React.memo(Home);

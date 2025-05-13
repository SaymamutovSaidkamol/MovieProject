import React from "react";
import { useFetch } from "@/hooks/useFetch";
import MovieView from "@/components/movie-view/MovieView";
import HomeSwaper from "@/components/home-swiper/Swiper";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie");

  console.log(data?.results);

  return (
    <div>
      {(data && data?.results) ? <HomeSwaper movies={data?.results}/> : null}
      {(data && data?.results) ? <MovieView movies={data?.results}/> : null}
    </div>
  );
};

export default React.memo(Home);

import Genres from "@/components/ganres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";

const Movies = () => {
  const [ganre, setGanre] = useState("");

  const { data, error, loading } = useFetch("/discover/movie", {
    page: 1,
    with_genres: ganre,
    without_genres: "18,10749,36",
  });

  return (
    <div>
      <Genres setGanre={setGanre} />
      <MovieView movies={data?.results} />
      {loading && <Skeleton count={20} />}
    </div>
  );
};

export default Movies;

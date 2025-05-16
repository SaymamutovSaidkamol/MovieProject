import MovieView from "@/components/movie-view/MovieView";
import { useContextValue } from "@/context";
import React from "react";

const Saved = () => {
  const [state, dispatch] = useContextValue();

  return (
    <div className="text-white">
      <MovieView movies={state.saved} />
    </div>
  );
};

export default Saved;

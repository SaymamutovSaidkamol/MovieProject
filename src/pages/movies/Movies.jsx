import { useFetch } from "@/hooks/useFetch";
import React, { memo, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import Genres from "@/components/ganres/Genres";
import Skeleton from "@/components/skeleton/Skeleton";
import MovieView from "@/components/movie-view/MovieView";
import { Suspense } from "@/utils";

import Notfound from "@/components/not-found/Notfound";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  let genres = params.get("genres") || "";
  let with_genres = genres.split("-").join(",").slice(1);

  const { data, error, loading } = useFetch("/discover/movie", {
    page,
    with_genres,
    without_genres: "18,10749,36",
  });

  const slicedData = data?.results?.slice(12);

  if (slicedData?.length > 0) {
    console.log(slicedData);
  } else {
    console.log("Not found");
  }

  const handleChangeGenre = useCallback((id) => {
    let array = genres.split("-");
    if (array.includes(id)) {
      genres = array.filter((i) => i !== id).join("-");
    } else {
      genres += `-${id}`;
    }

    if (!genres) {
      params.delete("genres");
    } else {
      params.set("genres", genres);
    }
    params.set("page", "1");
    setParams(params);
  }, []);

  const handleChange = (event, value) => {
    params.set("page", value.toString());
    setParams(params);
  };
  return (
    <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
      {loading ? <Skeleton count={8} /> : <MovieView movies={slicedData} />}

      <div className="container mx-auto flex justify-center my-10 text-white">
        {slicedData?.length > 0 ? (
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#f87171",
                borderColor: "#f87171",
              },
              "& .Mui-selected": {
                backgroundColor: "#C61F1F",
                color: "white",
                "&:hover": {
                  // backgroundColor: "white",
                  color: "#C61F1F",
                },
              },
            }}
            count={data?.total_pages >= 500 ? 500 : data?.total_pages}
            page={Number(page)}
            onChange={handleChange}
          />
        ) : (
          <Notfound />
        )}
      </div>

      <Suspense />
    </div>
  );
};

export default memo(Movies);

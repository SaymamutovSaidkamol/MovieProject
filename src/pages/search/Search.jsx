import MovieView from "@/components/movie-view/MovieView";
import Notfound from "@/components/not-found/Notfound";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const name = params.get("query");
  const [inputValue, setInputValue] = useState(name || "");

  const [page, setPage] = useState(1);

  const { data, error, loading } = useFetch(
    inputValue ? `/search/movie?query=${inputValue}` : null,
    { page }
  );

  const slicedData = data?.results?.slice(12);

  const handlesubmit = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      if (inputValue || inputValue != "") {
        params.set("query", inputValue);
        setParams(params);
      } else {
        params.delete("query");
        setParams(params);
      }
    }, 0);

    return () => clearTimeout(time);
  }, [inputValue]);

  console.log("slicedData", slicedData);

  useEffect(() => {
    params.delete("query");
    setParams(params);
  }, []);

  const handleChangePaganation = (event, value) => {
    setPage(value);
  };

  return (
    <div className="text-white container mx-auto">
      <div className="flex flex-col justify-center items-center text-[#4D4D4D]">
        <div className="w-[380px] h-[64px] py-[22px] px-[22px] flex gap-4 bg-[#111111] rounded-[12px] mt-12">
          <button className="text-2xl">
            <LuSearch className="text-2xl text-[#C61F1F]" />
          </button>
          <input
            type="text"
            className="outline-none text-white"
            onChange={handlesubmit}
            placeholder="Названия фильма"
          />
        </div>
        <div className="flex justify-center items-center flex-col mt-20 w-full">
          {slicedData === undefined ? (
            <>
              <div className="mt-[120px]">
                <span>Страница пока пуст</span>
              </div>
              <div className="mt-[80px]">
                <span>По вашему запросу ничего не найдена</span>
              </div>
            </>
          ) : slicedData.length === 0 ? (
            <>
              <Notfound />
            </>
          ) : (
            <>
              <div className="container w-full">
                <MovieView movies={slicedData} />
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
                        backgroundColor: "#ef4444",
                      },
                    },
                  }}
                  count={data?.total_pages}
                  onChange={handleChangePaganation}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

// <div className="text-white container mx-auto">
//       <div className="flex flex-col justify-center items-center text-[#4D4D4D]">
//         <div className="w-[380px] h-[64px] py-[22px] px-[22px] flex gap-4 bg-[#111111] rounded-[12px] mt-12">
//           <button className="text-2xl">
//             <LuSearch className="text-2xl text-[#C61F1F]" />
//           </button>
//           <input
//             type="text"
//             className="outline-none text-white w-full bg-transparent"
//             onChange={handleInputChange}
//             value={inputValue}
//             placeholder="Названия фильма"
//           />
//         </div>

//         <div className="flex justify-center items-center flex-col mt-20 w-full">
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error: {error.message}</p>
//           ) : moviesList.length === 0 ? (
//             <>
//               <Notfound />
//               <span>Movie Not Found</span>
//             </>
//           ) : (
//             <>
//               <div className="container border-white w-full">
//                 <MovieView movies={moviesList} />
//                 <Pagination
//                   sx={{
//                     "& .MuiPaginationItem-root": {
//                       color: "#f87171",
//                       borderColor: "#f87171",
//                     },
//                     "& .Mui-selected": {
//                       backgroundColor: "#C61F1F",
//                       color: "white",
//                       "&:hover": {
//                         backgroundColor: "#ef4444",
//                       },
//                     },
//                   }}
//                   count={data?.total_pages || 1}
//                   page={page}
//                   onChange={handleChangePagination}
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>

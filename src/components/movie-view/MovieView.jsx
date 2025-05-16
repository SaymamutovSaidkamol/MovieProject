import React from "react";
import Card from "./Card";

const MovieView = ({ movies }) => {
  // console.log(movies);

  return (
    <div className="container mx-auto grid grid-cols-4 max-[900px]:grid-cols-3 max-[800px]:grid-cols-2 max-[700px]:grid-cols-1 gap-5">
      {movies?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);

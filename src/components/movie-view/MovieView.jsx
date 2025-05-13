import React from "react";
import Card from "./Card";

const MovieView = ({ movies }) => {

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {movies?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);

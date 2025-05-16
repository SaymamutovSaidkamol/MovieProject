import React, { memo } from "react";
import NotFoundPage from "../../assets/notfound.mp4";

const Notfound = () => {
  return (
    <div>
      <video
        width="1100"
        height="1100"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={NotFoundPage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-[#4D4D4D] text-3xl font-bold border-black px-4">
        Movie Not Found
      </p>
    </div>
  );
};

export default memo(Notfound);

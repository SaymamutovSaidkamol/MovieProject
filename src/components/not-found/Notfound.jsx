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
        className=""
      >
        <source src={NotFoundPage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default memo(Notfound);

import React from "react";
import { Atom } from "react-loading-indicators";

export const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Atom color="#C61F1F" size="medium" text="" textColor="" />
      <p className="text-[#C61F1F] ">Loading...</p>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};


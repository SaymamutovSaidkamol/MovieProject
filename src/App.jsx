import React, { useEffect } from "react";
import MainRouters from "./pages";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <MainRouters />
    </>
  );
};

export default App;

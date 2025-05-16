import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] mt-[85px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

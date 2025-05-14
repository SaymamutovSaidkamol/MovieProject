import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

import { RiMovieLine } from "react-icons/ri";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div className="text-white">
      <header className="flex container mx-auto justify-around py-[22px] mb-[12px] max-[700px]:justify-between">
        <NavLink className="header-link" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div
          className={`flex justify-center items-center text-[#A1A1A1] gap-3.5 duration-300 max-[700px]:fixed max-[700px]:w-full max-[700px]:top-0 max-[700px]:h-[100vh] max-[700px]:bg-[#1D1D1D] max-[700px]:z-[9999] max-[700px]:flex-col max-[700px]:p-8 max-[700px]:gap-8 ${
            toggleNavbar ? "max-[700px]:top-0" : "max-[700px]:top-[100%]"
          }`}
        >
          <NavLink
            className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[60px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 header-link"
            to="/movies"
          >
            <RiMovieLine className="w-[40px] h-[70px]" />
            <p>Movies</p>
          </NavLink>
          <NavLink
            className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[58px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 max-[700px]:w-[70px] cursor-pointer header-link"
            to="/saved"
          >
            <FaRegBookmark className="w-[40px] h-[60px]" />
            <p>Saved</p>
          </NavLink>
          <NavLink
            className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[60px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 cursor-pointer header-link"
            to="/search"
          >
            <IoIosSearch className="w-[40px] h-[70px]" />
            <p>Search</p>
          </NavLink>
          <div className="hidden flex-col gap-4 max-[700px]:flex max-[700px]:items-center">
            <select
              name="language"
              id="language-select"
              className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-center"
            >
              <option value="RU">RU</option>
              <option value="UZ">UZ</option>
            </select>
            <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F]">
              Войти
            </button>
          </div>
          <IoClose
            onClick={() => setToggleNavbar((p) => !p)}
            className="hidden max-[700px]:block w-[40px] h-[40px] hover:text-[#C61F1F] top-[5px] absolute right-[15px]"
          />
        </div>
        <div className="flex gap-5 justify-center items-center max-[700px]:hidden">
          <select
            name="language"
            id="language-select"
            className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-center"
          >
            <option value="RU">RU</option>
            <option value="UZ">UZ</option>
          </select>
          <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F]">
            Войти
          </button>
        </div>

        <button
          onClick={() => setToggleNavbar((p) => !p)}
          className="hidden max-[700px]:w-[50px] max-[700px]:cursor-pointer max-[700px]:block"
        >
          <IoIosMenu className=" w-[40px] h-[40px] hover:text-[#C61F1F]" />
        </button>
      </header>
    </div>
  );
};

export default Header;

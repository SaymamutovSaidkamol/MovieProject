import React, { memo, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

import { RiMovieLine } from "react-icons/ri";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { RiHome4Line } from "react-icons/ri";
import { useContextValue } from "@/context";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const [state, dispatch] = useContextValue();

  const languageEn = {
    home: "Home",
    movies: "Movies",
    saved: "Saved",
    search: "Search",
    button: "Logout",
    our: "About Us",
    ofer: "Public Offer",
    reklama: "Advertising",
    faq: "F.A.Q",
    aloqa: "Contact",
    toifalar: "Categories",
    kino: "Cinema",
    teatr: "Theater",
    kontsertlar: "Concerts",
    sport: "Sports",
    biz_bilan_boglanish: "Contact Us",
    ijtimoiy_tarmoqlar: "Social Media",
  };

  const languageRu = {
    home: "Главная",
    movies: "Фильмы",
    saved: "Сохранённые",
    search: "Поиск",
    button: "Выход",
    our: "О нас",
    ofer: "Публичная оферта",
    reklama: "Реклама",
    faq: "Часто задаваемые вопросы",
    aloqa: "Контакты",
    toifalar: "Категории",
    kino: "Кино",
    teatr: "Театр",
    kontsertlar: "Концерты",
    sport: "Спорт",
    biz_bilan_boglanish: "Связаться с нами",
    ijtimoiy_tarmoqlar: "Социальные сети",
  };

  const languageUz = {
    home: "Bosh sahifa",
    movies: "Filmlar",
    saved: "Saqlanganlar",
    search: "Qidiruv",
    button: "Chiqish",
    our: "Biz haqimizda",
    ofer: "Ommaviy oferta",
    reklama: "Reklama",
    faq: "F.A.Q (Ko‘p so‘raladigan savollar)",
    aloqa: "Aloqa",
    toifalar: " Toifalar",
    kino: "Kino",
    teatr: "Teatr",
    kontsertlar: "Kontsertlar",
    sport: "Sport",
    biz_bilan_boglanish: "Biz bilan bog‘lanish",
    ijtimoiy_tarmoqlar: "Ijtimoiy tarmoqlar",
  };

  let newlanguage;
  console.log(state.language);

  if (state.language === "UZ") {
    newlanguage = languageUz;
  } else if (state.language === "RU") {
    newlanguage = languageRu;
  } else if (state.language === "EN") {
    newlanguage = languageEn;
  } else {
    newlanguage = languageUz;
  }
  console.log(newlanguage);

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    dispatch({ type: "LANGUAGE", payload: selectedLang });
  };

  return (
    <div className="text-white ">
      <header className="fixed top-0 left-0 w-full z-50 bg-[black] shadow-md">
        <div className="container mx-auto flex justify-between items-center py-[22px] px-4 max-[860px]:justify-between">
          <NavLink className="header-link" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <div
            className={`flex justify-center items-center text-[#A1A1A1] gap-3.5 duration-700 max-[860px]:fixed max-[860px]:w-full max-[860px]:top-0 max-[860px]:h-[300px] max-[860px]:flex-col  max-[860px]:bg-[#1D1D1D] max-[860px]:z-[9999]  max-[860px]:p-8 max-[860px]:gap-8                        ${
              toggleNavbar ? "max-[860px]:top-0" : "max-[860px]:top-[-100%]"
            }`}
          >
            <div className="flex flex-wrap gap-8">
              <NavLink
                className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[60px] gap-1.5 max-[860px]:flex-row max-[860px]:gap-3 header-link"
                to="/"
                onClick={() => setToggleNavbar((p) => !p)}
              >
                <RiHome4Line className="w-[40px] h-[70px]" />
                <p>{newlanguage.home}</p>
              </NavLink>
              <NavLink
                className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[60px] gap-1.5 max-[860px]:flex-row max-[860px]:gap-3 header-link"
                to="/movies"
                onClick={() => setToggleNavbar((p) => !p)}
              >
                <RiMovieLine className="w-[40px] h-[70px]" />
                <p>{newlanguage.movies}</p>
              </NavLink>
              <NavLink
                className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[58px] gap-1.5 max-[860px]:flex-row max-[860px]:gap-3 max-[860px]:w-[70px] cursor-pointer header-link relative"
                to="/saved"
                onClick={() => setToggleNavbar((p) => !p)}
              >
                <FaRegBookmark className="w-[40px] h-[60px]" />
                <p>{newlanguage.saved}</p>
                {state.savedCount != 0 && (
                  <mark className="absolute top-[-5px] right-[20px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#c61f1f] text-white max-[860px]:top-[20px] max-[860px]:right-[-25px]">
                    {state.savedCount}
                  </mark>
                )}
              </NavLink>
              <NavLink
                className="hover:text-[#c61f1f] flex flex-col justify-center items-center w-[80px] h-[60px] gap-1.5 max-[860px]:flex-row max-[860px]:gap-3 cursor-pointer header-link"
                to="/search"
                onClick={() => setToggleNavbar((p) => !p)}
              >
                <IoIosSearch className="w-[40px] h-[70px]" />
                <p>{newlanguage.search}</p>
              </NavLink>
            </div>
            <div className="hidden flex-col gap-4 max-[860px]:flex max-[860px]:items-center">
              <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F]">
                Войти
              </button>
            </div>
            <IoClose
              onClick={() => setToggleNavbar((p) => !p)}
              className="hidden max-[860px]:block w-[40px] h-[40px] hover:text-[#C61F1F] top-[5px] absolute right-[15px]"
            />
          </div>
          <div className="flex gap-5 justify-center items-center max-[860px]:hidden">
            <select
              name="language"
              id="language-select"
              className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-center outline-none"
              onChange={handleChangeLanguage}
            >
              <option value="UZ">UZ</option>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
            <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F]">
              {newlanguage.button}
            </button>
          </div>

          <div className="flex gap-4">
            <select
              name="language"
              id="language-select"
              className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-center hidden max-[860px]:block outline-none"
              onChange={handleChangeLanguage}
            >
              <option value="UZ">UZ</option>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
            <button
              onClick={() => setToggleNavbar((p) => !p)}
              className="hidden max-[860px]:block"
            >
              <div className="relative">
                <IoIosMenu className="w-[40px] h-[40px] hover:text-[#C61F1F] " />
                {state.savedCount != 0 && (
                  <mark className="absolute top-[-5px] right-[20px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#c61f1f] text-white max-[860px]:top-0 max-[860px]:right-[0]">
                    {state.savedCount}
                  </mark>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);

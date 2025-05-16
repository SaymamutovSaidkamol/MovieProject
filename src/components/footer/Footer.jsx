import React from "react";
import logo from "../../../public/EMBLEM.svg";
import PlayMarket from "../../assets/FooterMarket.png";
import AppStore from "../../assets/FooterAppStore.png";
import { CgNotes } from "react-icons/cg";
import { SiAdventofcode } from "react-icons/si";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ImFilm } from "react-icons/im";
import { PiFilmStripDuotone } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import { IoBasketballOutline } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { useContextValue } from "@/context";

const Footer = () => {
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
    <div className="container mx-auto ">
      <footer className="text-white mt-[128px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 bg-[#111111] rounded-[12px] px-[30px] py-[30px] mb-[40px] max-[700px]:gap-20">
        <ul className="flex flex-col gap-2">
          <li>
            <img src={logo} alt="" className="mb-[48px]" />
          </li>
          <li>
            <img src={PlayMarket} alt="" />
          </li>
          <li>
            <img src={AppStore} alt="" />
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          {newlanguage.our}
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            {" "}
            <CgNotes className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.ofer}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <SiAdventofcode className="text-[#C61F1F] w-[24px] h-[24px]" />
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.reklama}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <FaRegQuestionCircle className="text-[#C61F1F] w-[24px] h-[24px]" />
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.faq}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <FiPhone className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.aloqa}
            </p>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          {newlanguage.toifalar}
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            {" "}
            <ImFilm className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.kino}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <PiFilmStripDuotone className="text-[#C61F1F] w-[24px] h-[24px]" />
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.teatr}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <RiMovie2Line className="text-[#C61F1F] w-[24px] h-[24px]" />
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.kontsertlar}
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <IoBasketballOutline className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.sport}
            </p>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          {newlanguage.biz_bilan_boglanish}
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <p className="text-[#C61F1F] hover:underline cursor-pointer">
              +998 (95) 897-33-38
            </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <p> </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <p> </p>
          </li>
          <li className="flex items-center gap-2 text-[#A1A1A1]">
            <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">
              {newlanguage.ijtimoiy_tarmoqlar}
            </p>
          </li>
          <li className="flex items-center gap-5 text-[#A1A1A1]">
            <FaInstagram className="text-[#C61F1F] w-[24px] h-[24px]" />
            <CiFacebook className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
            <CiYoutube className="text-[#C61F1F] w-[24px] h-[24px]" />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

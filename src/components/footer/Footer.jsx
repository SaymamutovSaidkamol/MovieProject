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


const Footer = () => {
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
          О нас
          <li className="flex items-center gap-2 text-[#A1A1A1]"> <CgNotes className="text-[#C61F1F] w-[24px] h-[24px]"/>  <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Публичная оферта</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><SiAdventofcode className="text-[#C61F1F] w-[24px] h-[24px]" /><p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Реклама</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><FaRegQuestionCircle className="text-[#C61F1F] w-[24px] h-[24px]" /><p className="hover:text-[#C61F1F] hover:underline cursor-pointer">F.A.Q</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><FiPhone  className="text-[#C61F1F] w-[24px] h-[24px]"/> <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Контакты</p></li>
        </ul>
        <ul className="flex flex-col gap-5">
          Категории
          <li className="flex items-center gap-2 text-[#A1A1A1]"> <ImFilm className="text-[#C61F1F] w-[24px] h-[24px]"/>  <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Кино</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><PiFilmStripDuotone className="text-[#C61F1F] w-[24px] h-[24px]" /><p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Театр</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><RiMovie2Line className="text-[#C61F1F] w-[24px] h-[24px]" /><p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Концерты</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><IoBasketballOutline  className="text-[#C61F1F] w-[24px] h-[24px]"/> <p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Спорт</p></li>
        </ul>
        <ul className="flex flex-col gap-5">
          Связаться с нами
          <li className="flex items-center gap-2 text-[#A1A1A1]"><p className="text-[#C61F1F] hover:underline cursor-pointer">+998 (95) 897-33-38</p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><p> </p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><p> </p></li>
          <li className="flex items-center gap-2 text-[#A1A1A1]"><p className="hover:text-[#C61F1F] hover:underline cursor-pointer">Социальные сети</p></li>
          <li className="flex items-center gap-5 text-[#A1A1A1]"><FaInstagram  className="text-[#C61F1F] w-[24px] h-[24px]"/><CiFacebook className="text-[#C61F1F] w-[24px] h-[24px]" /> <CiYoutube  className="text-[#C61F1F] w-[24px] h-[24px]"/> </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

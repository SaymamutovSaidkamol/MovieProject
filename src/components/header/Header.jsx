import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import bilet from "../../assets/bilet.svg";
import seans from "../../assets/seans.svg";
import search from "../../assets/search.svg";
import afisha from "../../assets/afisha.svg";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div className="text-white">
      <header className="flex container mx-auto justify-around py-[22px] mb-[12px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={`flex justify-center items-center text-[#A1A1A1] duration-300 max-[700px]:fixed  max-[700px]:w-[70%]  max-[700px]:top-0 max-[700px]:h-screen  max-[700px]:bg-[#1D1D1D] max-[700px]:z-[9999]  max-[700px]:flex-col  max-[700px]:p-8  max-[700px]:gap-8 ${toggleNavbar ? "max-[700px]:left-[0]": "max-[700px]:-left-[70%]"}`}
        >
          <div className="flex flex-col justify-center items-center w-[80px] h-[48px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3">
            <img src={afisha} alt="" className="max-[700px]:text-black"/>
            <p className="hover:text-[#C61F1F]">Афиша</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[48px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 cursor-pointer">
            <img src={seans} alt="" />
            <p className="hover:text-[#C61F1F]">Сеансы</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[48px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 cursor-pointer">
            <img src={bilet} alt="" />
            <p className="hover:text-[#C61F1F]">Билеты</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[48px] gap-1.5 max-[700px]:flex-row max-[700px]:gap-3 cursor-pointer">
            <img src={search} alt="" />
            <p className="hover:text-[#C61F1F]">Поиск</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <select
            name="language"
            id="language-select"
            className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-center"
          >
            <option value="RU">RU</option>
          </select>
          <button className=" w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F]">
            Войти
          </button>
        </div>
        <button onClick={()=> setToggleNavbar(p => !p)} className="hidden max-[700px]:w-[50px] max-[700px]:cursor-pointer  max-[700px]:block">
          <IoIosMenu className="w-[40px] h-[40px] hover:text-[#C61F1F]" />
        </button>
      </header>
    </div>
  );
};

export default Header;

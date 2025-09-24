import { Search, ShoppingCart, Heart } from "lucide-react";

import logo from "../assets/logo (2).svg";
import inst from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const Header = memo(() => {
  const navLinks = ["ALL PRODUCTS", "ABOUT SEEDRA", "OUR BLOG", "CONTACTS"];
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-[0_4px_25px_rgba(207,207,207,0.25)] w-full ">
      <nav className="w-full h-[72px] flex items-center justify-center pl-[165px] pt-[26px] pb-[25px] container">
        <div className="w-[97px] h-[21px]">
          <img
            src={logo}
            alt="SEEDRA Logo"
            width={97}
            height={21}
            className="w-full h-full"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="w-[64px]"></div>

        <div className="w-[463px] h-[25px] flex items-center">
          {navLinks.map((link, index) => (
            <div key={link} className="flex items-center">
              <a
                href="/about"
                className="text-[#70737C] font-normal text-[14px] leading-[178%] hover:text-[#359740] transition-colors"
              >
                {link}
              </a>
              {index < navLinks.length - 1 && (
                <>
                  <div className="w-[16px]"></div>
                  <div className="w-[1px] h-[16px] bg-[#EFEFEF]"></div>
                  <div className="w-[16px]"></div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="w-[45px]"></div>

        <div className="w-[56px] h-[24px] flex items-center gap-[16px]">
          <a
            href="#"
            className="w-[20px] h-[20px] hover:opacity-80 transition-opacity"
          >
            <img
              src={inst}
              alt="Instagram"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </a>
          <a
            href="#"
            className="w-[20px] h-[20px] hover:opacity-80 transition-opacity"
          >
            <img
              src={facebook}
              alt="Facebook"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </a>
        </div>

        <div className="w-[13px]"></div>

        <div className="w-[285px] h-[48px] rounded-[70px] border border-gray-300 flex items-center px-[20px] py-[12px]">
          <div className="flex items-center gap-[16px]">
            <Search className="w-[16px] h-[16px] text-[#70737C]" />
            <span className="text-[#70737C] font-normal text-[14px]">
              Search
            </span>
          </div>
        </div>

        <div className="w-[13px]"></div>

        <div className="flex items-center gap-[24px]">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Heart className="w-[17px] h-[17px] text-[#359740]" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-[17px] h-[17px] text-[#359740]" />
          </a>
        </div>
      </nav>
    </header>
  );
});

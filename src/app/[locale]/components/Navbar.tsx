"use client";

import Image from "next/image";
import Link from "next-intl/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const t = useTranslations("Navbar");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-black"
          : "fixed w-full h-20 z-[100] bg-black"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <Image
            src="https://res.cloudinary.com/getoutbcn/image/upload/v1675348864/portfolio/navLogow_qc3q6b.png"
            alt="logo"
            width="125"
            height="63"
          />
        </div>
        <div className="flex items-center">
          <div className="flex mr-4">
            <LocaleSwitcher />
          </div>

          <ul className="hidden md:flex">
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <a href="#home">{t("home")}</a>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <a href="#about">{t("about")}</a>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <a href="#skills">{t("skills")}</a>
            </li>
            <li className="ml-10 text-sm  text-white uppercase hover:border-b">
              <a href="#projects">{t("projects")}</a>
            </li>
            <li className="ml-10 text-sm  text-white uppercase hover:border-b">
              <a href="#resume">CV</a>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu className="text-white" size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a onClick={() => setNav(false)} href="/">
                <Image
                  src="https://res.cloudinary.com/getoutbcn/image/upload/v1675348864/portfolio/navLogob_mkzfao.png"
                  alt="logo"
                  width="87"
                  height="44"
                />
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-2">
                <span className="italic text-xs">{t("slogan")}</span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="#home">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  {t("home")}
                </li>
              </a>
              <a href="#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  {t("about")}
                </li>
              </a>
              <a href="#skills">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  {t("skills")}
                </li>
              </a>
              <a href="#projects">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  {t("projects")}
                </li>
              </a>
              <a href="#resume">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  CV
                </li>
              </a>
              <a href="#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  {t("contact")}
                </li>
              </a>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#05040c]">
                {t("findMe")}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://www.linkedin.com/in/pablo-del-barrio/"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-black h-7 w-7" />
                </Link>
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://github.com/pdelbarrio"
                  target="_blank"
                >
                  <FaGithub className="text-black h-7 w-7" />
                </Link>
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="mailto:pablodbb@gmail.com?Subject=Job%20offer"
                  target="_blank"
                >
                  <AiOutlineMail className="text-black h-7 w-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

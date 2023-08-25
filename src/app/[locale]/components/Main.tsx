/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import reactStringReplace from "react-string-replace";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const t = useTranslations("Main");

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <div className="flex flex-col md:flex-row items-center max-w-[70%] m-auto md:mr-1">
            <h1 className="text-white mt-5 md:mt-10">{t("soy")}</h1>
            <img
              className="h-50 w-80 inline-block"
              src="https://res.cloudinary.com/getoutbcn/image/upload/v1675960453/portfolio/logoloop1_nob0mw.gif"
              alt="logo"
            />
          </div>
          <h1 className="text-[#fff]">{t("frontend")}</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            {reactStringReplace(t("mainText"), "React", (match, i) => (
              <span className="text-black font-bold">{match}</span>
            ))}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="https://www.linkedin.com/in/pablo-del-barrio/"
              target="_blank"
            >
              <FaLinkedinIn className="text-black h-7 w-7" />
            </Link>
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="https://github.com/pdelbarrio"
              target="_blank"
            >
              <FaGithub className="text-black h-7 w-7" />
            </Link>
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="mailto:pablodbb@gmail.com?Subject=Job%20offer"
              target="_blank"
            >
              <AiOutlineMail className="text-black h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

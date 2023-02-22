import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

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
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/getoutbcn/image/upload/v1675348864/portfolio/navLogow_qc3q6b.png"
            alt="logo"
            width="125"
            height="63"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <Link href="#home" scroll={false}>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <Link href="#about" scroll={false}>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <Link href="#skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm  text-white uppercase hover:border-b">
              <Link href="#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className="ml-10 text-sm  text-white uppercase hover:border-b">
              <Link href="#resume" scroll={false}>
                CV
              </Link>
            </li>
            <li className="ml-10 text-sm text-white uppercase hover:border-b">
              <Link href="#contact" scroll={false}>
                Contact
              </Link>
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
              <Link onClick={() => setNav(false)} href="/">
                <Image
                  src="https://res.cloudinary.com/getoutbcn/image/upload/v1675348864/portfolio/navLogob_mkzfao.png"
                  alt="logo"
                  width="87"
                  height="44"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                <span className="italic">Problem solver & fast learner</span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="#resume" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  CV
                </li>
              </Link>
              <Link href="#contact" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#05040c]">
                Find me
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

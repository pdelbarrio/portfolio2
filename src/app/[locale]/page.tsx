"use client";

import Head from "next/head";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <div className="bg-[#3b6b86]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80">
        <Head>
          <title>Pablo del Barrio | Frontend Developer</title>
        </Head>

        <section id="main" className="py-40 md:py-1 text-white">
          <Main />
        </section>

        <section
          id="about"
          className="py-20 mb-[470px] md:py-20 md:mb-20 text-white"
        >
          <About />
        </section>

        <section id="skills" className="py-20 text-white mt-20 md:mt-0">
          <Skills />
        </section>

        <section id="projects" className="py-20 text-white">
          <Projects />
        </section>

        <section id="resume" className="text-white">
          <Resume />
        </section>

        <section id="contact" className="text-white">
          <Contact />
        </section>

        <Link href="#main">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <HiOutlineChevronDoubleUp className=" filter hover:grayscale-0 cursor-pointer" />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}

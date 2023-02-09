import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Head from "next/head";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Home() {
  return (
    <div className="bg-[#3b6b86] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80">
      <Head>
        <title>Pablo del Barrio | Frontend Developer</title>
      </Head>

      <Header />

      <section id="hero" className="py-20">
        <Main />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="resume" className="py-20">
        <Resume />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HiOutlineChevronDoubleUp className=" filter hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Resume({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden max-w-full mx-auto justify-evenly items-center flex-col md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
        Curriculum
      </h3>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link
          href="https://res.cloudinary.com/getoutbcn/image/upload/v1679234183/portfolio/PablodelBarrio_english2023_rvsq38.pdf"
          target="_blank"
        >
          <button className="text-black w-40 uppercase bg-white hover:scale-105 transition duration-200 focus_outline-none text-sm rounded-lg px-10 py-2.5 text-center font-bold mr-5 mb-5 md:mb-0">
            Download CV in English
          </button>
        </Link>

        <Link
          href="https://res.cloudinary.com/getoutbcn/image/upload/v1679234183/portfolio/PablodelBarrio_spanish2023_wdd2y4.pdf"
          target="_blank"
        >
          <button className="text-black w-40 uppercase bg-white hover:scale-105 transition duration-200 focus_outline-none text-sm rounded-lg px-10 py-2.5 text-center font-bold mr-5 mt-5 md:mt-0">
            Download CV in Spanish
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Resume;

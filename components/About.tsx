import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-white text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        // viewport={{ once: true}}
        src="https://res.cloudinary.com/getoutbcn/image/upload/v1675601661/portfolio/transbg_ezfzf8.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#000000]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a highly motivated and experienced Frontend Developer with over a
          year of hands-on experience in a variety of projects, including
          freelance work, company projects, and personal projects. My expertise
          lies in Frontend development, specifically using React, but I also
          have a strong understanding of Backend development and some DevOps
          experience. I am passionate about programming and constantly strive to
          improve my skills and evolve as a professional. I consider myself a
          Fullstack Developer with a strong desire to learn and the ability to
          bring both logic and creativity to the development of digital
          solutions.
        </p>
      </div>
    </motion.div>
  );
}

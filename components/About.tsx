import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col sm:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 sm:justify-between mx-auto items-center"
    >
      {/* <h3 className="absolute top-10 uppercase tracking-[20px] text-white text-2xl sm:w-full -my-20"> */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl -my-40">
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
        src="https://res.cloudinary.com/getoutbcn/image/upload/v1675601661/portfolio/transbg_ezfzf8.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] c"
      />

      <div className="space-y-10 px-0 md:px-10 sm:w-full py-20">
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

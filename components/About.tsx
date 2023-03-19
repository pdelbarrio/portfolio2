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
      <h3
        className="text-center sm:text-left absolute top-24 uppercase tracking-[20px] text-white text-2xl -my-40"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
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
        src="https://res.cloudinary.com/getoutbcn/image/upload/v1676286294/portfolio/silueta3_q6pchf.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-56 rounded-full object-cover md:rounded-lg md:w-30 md:h-70 xl:w-[415px] xl:h-[635px] c"
      />

      <div className="space-y-10 px-0 md:px-10 sm:w-full py-20">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#000000]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a highly motivated and experienced Frontend Developer with{" "}
          <span className="text-black font-bold">2 years</span> of hands-on
          experience in a variety of projects, including freelance work, company
          projects, and personal projects. My expertise lies in Frontend
          development, specifically using{" "}
          <span className="text-black font-bold">React</span>, but I also have a
          strong understanding of Backend development and some DevOps
          experience. I am passionate about programming and constantly strive to
          improve my skills and evolve as a professional. I consider myself a
          Fullstack Developer with a strong desire to learn and the ability to
          bring both logic and creativity to the development of digital
          solutions.
          <br />I am currently delving into the new features offered by React in{" "}
          <span className="text-black font-bold">Nextjs</span> such as server
          components and their caching capabilities.
        </p>
      </div>
    </motion.div>
  );
}

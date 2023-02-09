import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../public/utils/projects";

const Projects = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
        Projects
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80">
        {projects.map((project, index) => (
          <ProjectCard key={index} projects={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#273f9f]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;

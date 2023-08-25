"use client";

import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../utils/projects";
import { useTranslations } from "next-intl";

const Projects = ({}) => {
  const t = useTranslations("Projects");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-white text-2xl -my-40">
        {t("title")}
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

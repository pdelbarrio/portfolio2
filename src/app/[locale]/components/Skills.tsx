"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";
import skills from "../../utils/skills";
import { useTranslations } from "next-intl";

type Props = {};

function Skills({}: Props) {
  const t = useTranslations("Skills");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        className="absolute uppercase tracking-[10px] text-white text-2xl z-20"
        style={{ position: "absolute", top: "1px" }}
      >
        {t("title")}
      </h3>

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
        style={{ marginTop: "130px" }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
export default Skills;

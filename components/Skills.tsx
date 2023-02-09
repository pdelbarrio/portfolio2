import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";
import skills from "../public/utils/skills";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-white text-2xl -my-10">
        Skills
      </h3>

      <div className="grid gap-1 md:gap-3 xl:gap-3 mt-20 grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
export default Skills;

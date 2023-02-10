import { motion } from "framer-motion";
import React from "react";

function Resume({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div>
        <p>ENGLISH</p>
        <p>CATALAN</p>
        <p>SPANISH</p>
      </div>
    </motion.div>
  );
}

export default Resume;

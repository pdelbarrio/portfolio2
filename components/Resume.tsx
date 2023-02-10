import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Resume({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
        Curriculum
      </h3>

      <div className="">
        <div className="">
          <div className="">
            <Link
              href="https://res.cloudinary.com/getoutbcn/image/upload/v1676059929/portfolio/PablodelBarrio_english2023_o24tto.pdf"
              target="_blank"
            >
              ENG
            </Link>
            <Link
              href="https://res.cloudinary.com/getoutbcn/image/upload/v1676059929/portfolio/PablodelBarrio_catala2023_vfrayp.pdf"
              target="_blank"
            >
              CAT
            </Link>
            <Link
              href="https://res.cloudinary.com/getoutbcn/image/upload/v1676059929/portfolio/PablodelBarrio_spanish2023_vqfvkw.pdf"
              target="_blank"
            >
              CAST
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;

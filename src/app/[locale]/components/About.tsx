"use client";

import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";
import reactStringReplace from "react-string-replace";

type Props = {};

export default function About({}: Props) {
  const t = useTranslations("About");
  let replacedWords = {} as any;

  const replaceAtBcn = (text: string) => {
    return text.replace(/(@bcn)/gi, "###AT_BCN###");
  };

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
        {t("header")}
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
        className="-mb-20 md:mb-1 flex-shrink-0 w-36 h-56 rounded-full object-cover md:rounded-lg md:w-30 md:h-70 xl:w-[415px] xl:h-[635px] c"
      />

      <div className="space-y-10 px-0 md:px-5 sm:px-5 py-20">
        <h4 className="text-4xl font-semibold">
          {reactStringReplace(t("title"), /(little|poco)/gi, (match, i) => (
            <span className="underline decoration-[#000000]">{match}</span>
          ))}
        </h4>
        <p className="text-base">
          {t("description")
            .split("\n\n")
            .map((paragraph, index) => {
              // Replace styled words and add link behavior to "@bcn"
              const replacedText = reactStringReplace(
                paragraph,
                /(3 años de experiencia|3 years of hands-on experience|Frontend Developer|React|Next\.js|Angular|@bcn|creciendo como profesional|grow as a professional)/gi,
                (match, i) => {
                  if (match.toLowerCase() === "@bcn") {
                    // For "@bcn", return the link
                    return (
                      <a
                        key={i}
                        href="https://www.atbcn.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-bold hover:underline"
                      >
                        {match}
                      </a>
                    );
                  } else {
                    // For other words, apply the initial styling
                    return (
                      <span key={i} className="text-black font-bold">
                        {match}
                      </span>
                    );
                  }
                }
              );

              return (
                <p key={index} className="mb-2">
                  {replacedText}
                </p>
              );
            })}
        </p>
      </div>
    </motion.div>
  );
}

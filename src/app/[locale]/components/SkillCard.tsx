/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  skill: {
    name: string;
    logo: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer skill-card">
      <div className="relative w-[100px] h-[50px] md:w-[140px] md:h-[80px] xl:w-[160px] xl:h-[80px] rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0">
          <img
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] xl:w-[64px] xl:h-[64px]"
            src={skill.logo}
            alt="Logo"
          />
        </div>
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
          <p className="text-xs md:text-sm xl:text-base">{skill.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

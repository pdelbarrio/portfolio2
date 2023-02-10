import Image from "next/image";
import React, { useState } from "react";

type Props = {
  skill: {
    name: string;
    logo: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="group relative flex cursor-pointer skill-card"
      onMouseOver={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className="p-2 md:p-6 bg-white shadow-xl rounded-xl">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-row w-full h-full">
              <Image
                src={skill.logo}
                width="64"
                height="64"
                alt="/"
                className={`${showText ? "hidden" : "block"}`}
              />
              <div className={`text-black ${showText ? "block" : "hidden"}`}>
                {skill.name}
              </div>
              <div className="md:block hidden">{skill.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

type Props = {
  projects: {
    name: string;
    description: string;
    image: string;
    techUsed: string[];
    linkGithub: string;
    linkDeploy: string;
    longDescription: string;
    linkVideodemo: string;
    status: string;
    moreInfo: boolean;
  };
};

const ProjectCard = ({ projects }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#525969] p-10 overflow-hidden">
      {/* <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"> */}
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={projects.image}
        alt="/"
      />
      <div>
        <p className="font-bold text-2xl mt-1">{projects.name}</p>
      </div>
      <p>{projects.description}</p>
      <div className="m-4">
        {projects.techUsed.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-700 text-white p-2 rounded-lg text-sm m-1 mt-1 mb-1 inline-block"
          >
            {tech}
          </span>
        ))}

        <div className="flex items-center justify-evenly py-4">
          <Link
            className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href={projects.linkDeploy}
            target="_blank"
          >
            <BiLinkExternal className="text-black h-7 w-7" />
          </Link>
          <Link
            className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href={projects.linkGithub}
            target="_blank"
          >
            <FaGithub className="text-black h-7 w-7" />
          </Link>
          <Link
            className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href="/getout"
          >
            <BsInfoCircleFill className="text-black h-7 w-7" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

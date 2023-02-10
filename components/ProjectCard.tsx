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
    <div className="relative flex flex-col items-center justify-center h-auto border border-black rounded-lg">
      <div>
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
      </div>
      <div className="px-2">
        <h3>{projects.name}</h3>
        <p>{projects.description}</p>
      </div>
      <div className="m-4">
        {projects.techUsed.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-700 text-white p-2 rounded-lg text-sm m-1 mt-1 mb-1 inline-block"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-evenly py-4">
        {projects.linkDeploy === "" ? null : (
          <Link
            className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href={projects.linkDeploy}
            target="_blank"
          >
            <BiLinkExternal className="text-black h-7 w-7" />
          </Link>
        )}
        {projects.linkGithub === "" ? null : (
          <Link
            className="rounded-full shadow-lg  bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href={projects.linkGithub}
            target="_blank"
          >
            <FaGithub className="text-black h-7 w-7" />
          </Link>
        )}
        {projects.moreInfo ? (
          <Link
            className="rounded-full shadow-lg  bg-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
            href=""
          >
            <BsInfoCircleFill className="text-black h-7 w-7" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;

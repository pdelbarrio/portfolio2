import { motion } from "framer-motion";
import React from "react";

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
    <div className="group relative flex cursor-pointer">
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
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

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              {projects.name}
            </h4>

            <p className="text-lg text-center md:text-left">
              {projects.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

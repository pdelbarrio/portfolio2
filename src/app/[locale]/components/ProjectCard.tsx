/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { BiLinkExternal, BiPlay } from "react-icons/bi";
import { FaGithub, FaInfo } from "react-icons/fa";
import Modal from "./Modal";
import ModalVideo from "./ModalVideo";
import { useLocale } from "next-intl";

type Props = {
  project: {
    name: string;
    description?: string;
    descriptions?: {
      es: string;
      en: string;
    };
    image: string;
    techUsed: string[];
    linkGithub: string;
    linkDeploy: string;
    longDescription: {
      es: string;
      en: string;
    };
    linkVideodemo: string;
    status: string;
    moreInfo: boolean;
  };
};

const ProjectCard = ({ project }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(false);
  const locale = useLocale();

  // Definir un tipo para las descripciones dinámicas
  type Descriptions = {
    [key: string]: string;
  };

  const descriptions = project.descriptions as Descriptions;
  const longDescriptions = project.longDescription as Descriptions;

  return (
    <div className="relative bg-[#11435f] flex flex-col items-center justify-center h-auto rounded-lg">
      <div>
        {/* <motion.img
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
          src={project.image}
          alt="/"
        /> */}
        <img
          src={project.image}
          alt="/"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="px-2">
        <h3 className="p-2">{project.name}</h3>
        {descriptions && descriptions[locale] ? (
          <p className="text-xs">{descriptions[locale]}</p>
        ) : (
          <p className="text-sm">{project.description}</p>
        )}
      </div>
      <div className="m-4">
        {project.techUsed.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-700 text-white p-2 rounded-lg text-sm m-1 mt-1 mb-1 inline-block"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-evenly py-4">
        {project.linkDeploy === "" ? null : (
          <Link
            className="rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-2"
            href={project.linkDeploy}
            target="_blank"
          >
            <BiLinkExternal className="text-black h-6 w-6" />
          </Link>
        )}
        {project.linkGithub === "" ? null : (
          <Link
            className="rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-2"
            href={project.linkGithub}
            target="_blank"
          >
            <FaGithub className="text-black h-6 w-6" />
          </Link>
        )}
        {longDescriptions && longDescriptions[locale] ? (
          <Link
            className="rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-2"
            href=""
            onClick={() => setShowModal(true)}
          >
            <FaInfo className="text-black h-6 w-6" />
          </Link>
        ) : null}
        {project.linkVideodemo === "" ? null : (
          <Link
            className="rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-2"
            href=""
            onClick={() => setShowModalVideo(true)}
          >
            <BiPlay className="text-black h-6 w-6" />
          </Link>
        )}
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        project={project}
        content={longDescriptions && longDescriptions[locale]}
      />
      <ModalVideo
        showModalVideo={showModalVideo}
        setShowModalVideo={setShowModalVideo}
        projects={project}
      />
    </div>
  );
};

export default ProjectCard;

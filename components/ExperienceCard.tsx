import React from "react";
import { motion } from "framer-motion";

export interface Props {
  experience: {
    logo: string;
    title: string;
    company: string;
    period: string;
    tasks: string[];
    techUsed: string[];
  };
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={experience.logo}
        alt="/"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.title}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <p className="uppercase py-5 text-gray-300">{experience.period}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {experience.techUsed.map((tech, index) => (
            <img
              className="h-10 w-10 rounded-full"
              key={index}
              src={tech}
              alt="/"
            />
          ))}
          {/* <img
            className="h-10 w.10 rounded-full"
            src="https://portfoliov2-nine-ecru.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgetoutbcn%2Fimage%2Fupload%2Fv1675346770%2Fportfolio%2Fskills%2Freact_wda0bf.png&w=64&q=75"
            alt=""
          />
          <img
            className="h-10 w.10 rounded-full"
            src="https://portfoliov2-nine-ecru.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgetoutbcn%2Fimage%2Fupload%2Fv1675346770%2Fportfolio%2Fskills%2Freact_wda0bf.png&w=64&q=75"
            alt=""
          />
          <img
            className="h-10 w.10 rounded-full"
            src="https://portfoliov2-nine-ecru.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgetoutbcn%2Fimage%2Fupload%2Fv1675346770%2Fportfolio%2Fskills%2Freact_wda0bf.png&w=64&q=75"
            alt=""
          />*/}
        </div>
      </div>
    </article>
  );
}

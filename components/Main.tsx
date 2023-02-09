import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-[#fff]">
            Hi, I am{" "}
            <img
              className="h-50 w-80 inline-block"
              src="https://res.cloudinary.com/getoutbcn/image/upload/v1675960453/portfolio/logoloop1_nob0mw.gif"
              alt="logo"
            />
          </h1>
          <h1 className="text-[#fff]">A Frontend Developer</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            Backed by more than a year of experience as a developer working on
            different projects, either as a freelancer, for companies or in
            personal projects. Even though I am specialized in Frontend (and
            more specifically in React), I have the necessary knowledge to
            perform Backend tasks (and even some DevOps).
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="https://www.linkedin.com/in/pablo-del-barrio/"
              target="_blank"
            >
              <FaLinkedinIn className="text-black h-7 w-7" />
            </Link>
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="https://github.com/pdelbarrio"
              target="_blank"
            >
              <FaGithub className="text-black h-7 w-7" />
            </Link>
            <Link
              className="rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4"
              href="mailto:pablodbb@gmail.com?Subject=Job%20offer"
              target="_blank"
            >
              <AiOutlineMail className="text-black h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

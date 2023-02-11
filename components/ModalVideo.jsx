import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const ModalVideo = ({ showModalVideo, setShowModalVideo, projects }) => {
  return (
    showModalVideo && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-20 left-0 bottom-0 right-0 h-full w-full bg-black bg-opacity-50 z-20"
        onClick={() => setShowModalVideo(false)}
      >
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          className="relative m-auto max-w-full md:max-w-3xl bg-white p-4 md:p-8 rounded-lg shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg md:text-2xl text-black font-bold mb-2 md:mb-4">
            {projects.name}
          </h3>
          <div className="flex items-center justify-center">
            <ReactPlayer url={projects.linkVideodemo} controls />
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default ModalVideo;

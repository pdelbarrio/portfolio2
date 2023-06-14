import React from "react";
import { motion } from "framer-motion";

const Modal = ({ showModal, setShowModal, projects }) => {
  return (
    showModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-20 left-0 bottom-0 right-0 h-full w-full bg-black bg-opacity-50 z-20"
        onClick={() => setShowModal(false)}
      >
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          className="relative m-auto max-w-full md:max-w-3xl bg-white p-4 md:p-8 rounded-lg shadow-xl"
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: "80%", overflowY: "auto" }} // Added styles for scrolling
        >
          <h3 className="text-lg md:text-2xl text-black font-bold mb-2 md:mb-4">
            {projects.name}
          </h3>
          <p
            className="text-base md:text-lg text-black mb-2 md:mb-4"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {projects.longDescription}
          </p>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal;

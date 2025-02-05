import React from "react";
import { motion } from "framer-motion";

// Footer component
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-6 mt-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-6">
        <div className="flex-shrink-0">
          <img src="../public/logo-w.svg" alt="Logo" className="w-80" />
        </div>

        <p className="text-sm opacity-80 text-center flex-grow">
          &copy; {new Date().getFullYear()} Personal Diary. All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-all"
          >
            ⬆ Back to Top
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

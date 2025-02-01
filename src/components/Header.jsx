import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";
import AddEntryButton from "./AddEntryButton";
import AddEntryModal from "./AddEntryModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [title, date, imageUrl, content]);

  const handleAddEntry = () => {
    if (!title || !date || !imageUrl || !content) {
      setError("All fields are required!");
      return;
    }
    setIsModalOpen(false);
    setTitle("");
    setDate("");
    setImageUrl("");
    setContent("");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-6">
          <div className="flex-shrink-0">
            <Logo className="w-36 md:w-44 lg:w-52" />
          </div>
          <div className="flex flex-col items-center text-center flex-grow mx-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Personal Diary
            </h1>
            <p className="text-lg sm:text-xl font-light mt-2 opacity-90">
              Capture your thoughts, one day at a time.
            </p>
          </div>
          <div className="flex-shrink-0 flex space-x-4 items-center">
            <AddEntryButton onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>
      <AddEntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        content={content}
        setContent={setContent}
        error={error}
        handleSave={handleAddEntry}
      />
    </motion.header>
  );
};

export default Header;

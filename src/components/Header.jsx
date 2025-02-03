import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";
import AddEntryButton from "./AddEntryButton";
import AddEntryModal from "./AddEntryModal";

const Header = ({ setEntries, entries }) => {
  // Receiving setEntries and entries as props
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [title, setTitle] = useState(""); // State for entry title
  const [date, setDate] = useState(""); // State for entry date
  const [imageUrl, setImageUrl] = useState(""); // State for entry image URL
  const [content, setContent] = useState(""); // State for entry content
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    setError(""); // Clear errors when any field changes
  }, [title, date, imageUrl, content]);

  const handleAddEntry = () => {
    if (!title || !date || !imageUrl || !content) {
      // Validate all fields
      setError("All fields are required!"); // Set error if any field is empty
      return;
    }

    const newEntry = {
      id: Date.now(), // Unique ID for the new entry
      title,
      date,
      imageUrl,
      content,
    };

    setEntries([newEntry, ...entries]); // Add new entry to the beginning of entries array
    setIsModalOpen(false); // Close the modal

    // Clear form fields after saving
    setTitle("");
    setDate("");
    setImageUrl("");
    setContent("");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ duration: 2 }} // Duration of the animation
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6" // Styling for the header
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-6">
          <img src="../public/logo-w.svg" alt="Logo" className="w-80" />
          <div className="flex flex-col items-center text-center flex-grow mx-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Personal Diary
            </h1>
            <p className="text-lg sm:text-xl font-light mt-2 opacity-90">
              Capture your thoughts, one day at a time.
            </p>
          </div>
          <AddEntryButton onClick={() => setIsModalOpen(true)} />{" "}
          {/* Button to open modal */}
        </div>
      </div>
      <AddEntryModal
        isOpen={isModalOpen} // Pass modal open state
        onClose={() => setIsModalOpen(false)} // Function to close modal
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        content={content}
        setContent={setContent}
        error={error}
        handleSave={handleAddEntry} // Function to handle saving the entry
      />
    </motion.header>
  );
};

export default Header;

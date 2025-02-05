import { useRef, useEffect, useState } from "react";

const DiaryForm = ({
  title,
  setTitle,
  date,
  setDate,
  imageUrl,
  setImageUrl,
  content,
  setContent,
}) => {
  const textareaRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null); // Reference for file input

  const defaultImages = [
    "public/images/jeshoots-com-9n1USijYJZ4-unsplash.jpg", // Sample Image 1
    "public/images/marissa-grootes-WDNRd72gF4s-unsplash.jpg", // Sample Image 2
    "public/images/nicolas-messifet-qBJQiKESR9c-unsplash.jpg", // Sample Image 3
  ];

  // Random sample image applied in case user does not add image url or file
  const getRandomDefaultImage = () => {
    const randomIndex = Math.floor(Math.random() * defaultImages.length);
    return defaultImages[randomIndex];
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      const maxHeight = window.innerHeight * 0.6; // max height
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`; // adapt height
    }
  }, [content]);

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Save image as URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    if (event.dataTransfer.files.length > 0) {
      handleImageUpload(event.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    // Opens file upload dialogue, if drag & drop section is active
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="w-full p-2 mb-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      

      <textarea
        ref={textareaRef}
        placeholder="Content"
        className="w-full p-2 mb-2 border rounded resize overflow-auto"
        style={{ maxHeight: "90vh" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      {/* Combined Image URL Input and Drag & Drop */}
      <div className="mb-4">
        <label htmlFor="imageInput" className="block text-sm text-gray-600 mb-2">
          Add an image (optional):
        </label>
        {/* URL Input */}
        <input
          id="imageInput"
          type="text"
          placeholder="Enter Image URL"
          className="w-full p-2 mb-2 border rounded"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        
        {/* Drag & Drop Section + File Upload */}
        <div
          className={`w-full p-4 mb-2 border-2 rounded cursor-pointer transition ${
            dragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick} // Click opens file upload
        >
          <p className="text-center text-gray-600">
            {dragActive ? "Drop image here" : "Drag image here or click to open upload"}
          </p>
          <input
            ref={fileInputRef} // Reference for file upload
            type="file"
            accept="image/*"
            className="hidden" // hide file input
            onChange={handleFileInputChange}
          />
        </div>
      </div>

      {/* Image Preview or Default Image */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 text-center">Image Preview:</p>
        <img
          src={imageUrl || getRandomDefaultImage()}
          alt="Preview"
          className="mobject-cover rounded"
        />
      </div>
    </>
  );
};

export default DiaryForm;

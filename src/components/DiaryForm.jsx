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
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [defaultImage, setDefaultImage] = useState(""); // Speichert das zufällig gewählte Bild

  const defaultImages = [
    "/images/jeshoots-com-9n1USijYJZ4-unsplash.jpg",
    "/images/marissa-grootes-WDNRd72gF4s-unsplash.jpg",
    "/images/nicolas-messifet-qBJQiKESR9c-unsplash.jpg",
  ];

  useEffect(() => {
    // Setze das Standardbild nur einmal beim Laden der Komponente
    setDefaultImage(defaultImages[Math.floor(Math.random() * defaultImages.length)]);
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const maxHeight = window.innerHeight * 0.6;
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  }, [content]);

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
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

      {/* Image Input */}
      <div className="mb-4">
        <label htmlFor="imageInput" className="block text-sm text-gray-600 mb-2">
          Add an image (optional):
        </label>
        <input
          id="imageInput"
          type="text"
          placeholder="Enter Image URL"
          className="w-full p-2 mb-2 border rounded"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {/* Drag & Drop */}
        <div
          className={`w-full p-4 mb-2 border-2 rounded cursor-pointer transition ${
            dragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <p className="text-center text-gray-600">
            {dragActive ? "Drop image here" : "Drag image here or click to open upload"}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileInputChange}
          />
        </div>
      </div>

      {/* Image Preview */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 text-center">Image Preview:</p>
        <div className="w-full max-h-[200px] overflow-hidden">
        <img
          src={imageUrl || defaultImage}
          alt="Preview"
          className="object-cover w-full h-full rounded"
        />
        </div>
      </div>
    </>
  );
};

export default DiaryForm;

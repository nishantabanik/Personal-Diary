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
        setImageUrl(reader.result); // Speichert das Bild als Data URL
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

      {/* Bild-URL eingeben */}
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-2 border rounded"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      {/* Drag & Drop Bereich + Datei-Upload */}
      <div
        className={`w-full p-4 mb-2 border-2 rounded cursor-pointer transition ${
          dragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-center text-gray-600">
          {dragActive ? "Lass das Bild hier fallen" : "Bild hierher ziehen oder klicken zum Hochladen"}
        </p>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
        />
      </div>

      {/* Bildvorschau */}
      {imageUrl && (
        <div className="mb-2">
          <p className="text-sm text-gray-600">Bildvorschau:</p>
          <img
            src={imageUrl}
            alt="Uploaded preview"
            className="w-full h-auto rounded"
          />
        </div>
      )}

      <textarea
        ref={textareaRef}
        placeholder="Content"
        className="w-full p-2 mb-2 border rounded resize overflow-auto"
        style={{ maxHeight: "90vh" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </>
  );
};

export default DiaryForm;

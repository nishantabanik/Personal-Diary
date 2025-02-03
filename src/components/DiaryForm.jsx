import { useRef, useEffect } from "react";

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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset of height
      const maxHeight = window.innerHeight * 0.6; // max height of form in viewport
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`; // Adapting height
    }
  }, [content]); // effect starts with increasing content

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
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-2 border rounded"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        ref={textareaRef}
        placeholder="Content"
        className="w-full p-2 mb-2 border rounded resize overflow-auto"
        style={{ maxHeight: "90vh" }} // prevent max height
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </>
  );
};

export default DiaryForm;

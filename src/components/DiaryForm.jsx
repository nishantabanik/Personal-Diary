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
        placeholder="Content"
        className="w-full p-2 mb-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </>
  );
};

export default DiaryForm;

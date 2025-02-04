import DiaryForm from "./DiaryForm";

const AddEntryModal = ({
  isOpen,
  onClose,
  title,
  setTitle,
  date,
  setDate,
  imageUrl,
  setImageUrl,
  content,
  setContent,
  error,
  handleSave,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-500 flex flex-col items-center relative z-50">
        <h2 className="text-2xl font-bold mb-4">Add New Entry</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <DiaryForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          content={content}
          setContent={setContent}
        />
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;

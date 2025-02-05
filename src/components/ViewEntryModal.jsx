const ViewEntryModal = ({ isOpen, onClose, entry }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-500 flex flex-col items-center relative">
        <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
        <p className="text-sm text-gray-400 mb-2">
          {new Date(entry.date).toLocaleDateString()}
        </p>
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700">{entry.content}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewEntryModal;

import Entries from "./Entries";
import ShowEntryButton from "./ShowEntryButton";

const ShowEntryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-500 flex flex-col items-center relative z-50">
        <h2 className="text-2xl font-bold mb-4">Entry title</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowEntryModal;

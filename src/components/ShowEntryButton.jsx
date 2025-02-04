const ShowEntryButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
    >
      ➕ Show Entry
    </button>
  );
};

export default ShowEntryButton;

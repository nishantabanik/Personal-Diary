import React, { useState } from "react";
import ViewEntryModal from "./ViewEntryModal";

const Entries = ({ entries }) => {
  // useState for selcting single entry for modal
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Receiving entries as props
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
      {" "}
      {/* Container for entries */}
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="card bg-base-100 shadow-md p-4 rounded-lg cursor-pointer"
          onClick={() => setSelectedEntry(entry)}
        >
          {" "}
          {/* Entry card */}
          <img
            src={entry.imageUrl}
            alt={entry.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />{" "}
          {/* Entry image */}
          <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
          <p className="text-gray-500 mb-2">
            {new Date(entry.date).toLocaleDateString()}
          </p>
          <p>{entry.content}</p> {/* Entry content */}
        </div>
      ))}
      {/* View Entry Modal */}
      <ViewEntryModal
        isOpen={!!selectedEntry}
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </div>
  );
};

export default Entries;

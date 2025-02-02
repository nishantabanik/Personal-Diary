const Entries = ({ entries }) => { // Receiving entries as props
    return (
        <div className="space-y-4"> {/* Container for entries */}
            {entries.map((entry) => (
                <div key={entry.id} className="card bg-base-100 shadow-md p-4 rounded-lg"> {/* Entry card */}
                    <img src={entry.imageUrl} alt={entry.title} className="w-full h-40 object-cover rounded-lg mb-4" /> {/* Entry image */}
                    <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
                    <p className="text-gray-500 mb-2">{new Date(entry.date).toLocaleDateString()}</p>
                    <p>{entry.content}</p> {/* Entry content */}
                </div>
            ))}
        </div>
    );
}

export default Entries;
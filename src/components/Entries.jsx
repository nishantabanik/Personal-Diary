import React from "react";

export default function Entries({ entries }) {
    return (
    <div className="space-y-4">
            {entries.map((entry) => (
        <div key={entry.id} className="card bg-base-100 shadow-md p-4">
            <p>{entry.content}</p>
        </div>
    ))}
    </div>
    );
}

import React from "react";

export default function InputForm() {
    return (
    <form className="card bg-base-100 shadow-md p-6 rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add new diary entry</h2>
        <textarea className="textarea textarea-bordered w-full" placeholder="Write here..."></textarea>
        <button className="btn btn-primary mt-4">Submit</button>
    </form>
    );
}

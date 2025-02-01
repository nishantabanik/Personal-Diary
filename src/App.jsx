import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import Entries from "./components/Entries"; // New component import
import "./index.css"; // Tailwind & DaisyUI styles

export default function App() {
  // Sample diary entries data (replace with real data)
  const diaryEntries = [
    { id: 1, content: "This is my first diary entry!" },
    { id: 2, content: "Today was an amazing day!" },
  ];

  return (
    <div className="bg-base-100 text-base-content min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto p-4 flex-grow">
        <section className="hero bg-base-200 text-center py-10 rounded-lg shadow">
          <h1 className="text-4xl font-bold">Welcome to Secret Scribblers</h1>
          <p className="text-lg">Your digital diary for creative thoughts.</p>
        </section>

        <InputForm /> {/* Input form for adding entries */}

        {/* Entries section below the input form */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Your Diary Entries</h2>
          <Entries entries={diaryEntries} /> {/* Pass diary entries to Entries component */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

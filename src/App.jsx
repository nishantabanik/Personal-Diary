import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Entries from "./components/Entries";
import "./index.css";

const App = () => {
  const [entries, setEntries] = useState(() => {
    return JSON.parse(localStorage.getItem("diaryEntries")) || [];
  });

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className="bg-base-100 text-base-content min-h-screen flex flex-col">
      <Header setEntries={setEntries} entries={entries} />{" "}
      {/* Passing setEntries and entries to Header */}
      <main className="container mx-auto p-8 flex-grow">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 ">Your Diary Entries</h2>
          <Entries entries={entries} />{" "}
          {/* Passing entries to Entries component */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

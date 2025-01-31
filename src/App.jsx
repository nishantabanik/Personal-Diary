import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import "./index.css"; // Global styles

export default function App() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <section className="hero bg-base-200 text-center py-10">
          <h1 className="text-4xl font-bold">Welcome to Secret Scribblers</h1>
          <p className="text-lg">Your digital diary for creative thoughts.</p>
        </section>
        <InputForm />
      </main>
      <Footer />
    </div>
  );
}

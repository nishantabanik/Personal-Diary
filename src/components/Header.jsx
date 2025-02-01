import React from "react";

export default function Header() {
    return (
    <header className="p-4 shadow-md bg-base-200">
        <nav className="container mx-auto flex justify-between">
        <a className="text-xl font-bold">Secret Scribblers</a>
        <div>
          {/* Navigation links */}
        </div>
        </nav>
    </header>
    );
}

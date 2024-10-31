"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">ChatBot App</h1>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/apikey" className="hover:text-gray-400">
            Enter API Key
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

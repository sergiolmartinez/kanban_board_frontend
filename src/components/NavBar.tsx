import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white w-screen">
      <h1 className="text-lg font-bold">iKanB</h1>
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search public projects..."
          className="placeholder-gray-500 block bg-white w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
      </div>
      <div>
        <button className="mr-2 p-2 bg-blue-700 rounded">Sign In</button>
        <button className="p-2 bg-green-500 rounded">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

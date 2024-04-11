import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

const AppNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-sm">
      <div>
        <span className="text-xl font-bold">iKanB</span>
      </div>
      <div className="relative flex flex-grow mx-4 lg:max-w-lg md:max-w-md sm:max-w-sm shadow-md">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <CiSearch className="text-gray-800" />
        </div>
        <Input placeholder="Find a public project..." className="pl-10" />
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <Button variant="outline" className="h-8">
            Search
          </Button>
        </div>
      </div>
      <div>
        <Button variant="ghost" color="light" className="mr-2">
          Sign In
        </Button>
        <Button color="success">Sign Up</Button>
      </div>
    </nav>
  );
};

export default AppNavbar;

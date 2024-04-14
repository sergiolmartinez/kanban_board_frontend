import React from "react";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 w-full bg-background shadow-sm dark:shadow-zinc-900">
      <div>
        <span className="text-xl font-bold">
          <Link to="/">iKanB</Link>
        </span>
      </div>
      <div className="relative flex flex-grow mx-4 lg:max-w-lg md:max-w-md sm:max-w-sm shadow-md dark:shadow-zinc-900">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <CiSearch className="text-gray-800" />
        </div>
        <Input placeholder="Find a public project..." className="pl-10" />
        <div className="absolute inset-y-0 right-2 flex items-center ">
          <Button variant="ghost" className="h-8">
            Search
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <Link to="login">
          <Button variant="ghost" color="light" className="mr-2">
            Login
          </Button>
        </Link>
        <Link to="register">
          <Button color="success">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

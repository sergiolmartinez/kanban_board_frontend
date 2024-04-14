// src/components/MainContent.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center ">
        <div className="mb-6 flex items-center border shadow-sm p-4 bg-orange-100 text-amber-700 rounded-full uppercase dark:shadow-zinc-200">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 dark:text-neutral-200 mb-6">
          iKanB empowered to
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work smarter.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 dark:text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto mt-6">
        iKanB is a project management tool that helps you organize your work,
        collaborate with your team, and manage your tasks.
      </div>
      <Link to="register">
        <Button variant="default" className="mt-6 text-lg" size="lg">
          Get iKanB today
        </Button>
      </Link>
    </div>
  );
};

export default Home;

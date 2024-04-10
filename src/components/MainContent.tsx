// src/components/MainContent.tsx
import React from "react";

const MainContent = () => {
  return (
    <main className="flex flex-col items-center text-center p-4 grow">
      <section className="my-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why iKanB?</h2>
        <p className="max-w-md md:max-w-lg">
          Manage your projects with ease and boost your team's productivity.
        </p>
        {/* Add more content as needed */}
      </section>
      {/* Additional sections for features, testimonials, etc., can follow a similar structure */}
    </main>
  );
};

export default MainContent;

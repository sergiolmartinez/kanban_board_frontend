// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-center mt-auto">
      © {new Date().getFullYear()} iKanB. All rights reserved.
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;

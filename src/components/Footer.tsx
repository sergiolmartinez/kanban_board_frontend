// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className=" flex flex-col items-center inset-x-0 bottom-0 p-4 text-center mt-auto">
      © {new Date().getFullYear()} iKanB. All rights reserved.
      <div className="flex items-center justify-between space-x-4 mt-2">
        <Link to="contact">
          <Button variant="link">Contact</Button>
        </Link>
        <Link to="privacy">
          <Button variant="link">Privacy Policy</Button>
        </Link>
        <Link to="terms">
          <Button variant="link">Terms & Conditions</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

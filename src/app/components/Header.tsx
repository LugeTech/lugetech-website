// src/components/Header.tsx
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Lugetech</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/about"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

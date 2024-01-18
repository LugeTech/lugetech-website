"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type NavLink = {
  href: string;
  title: string;
};

const navLinks: NavLink[] = [
  { href: "/about", title: "About" },
  { href: "/services", title: "Services" },
  { href: "/contact", title: "Contact" },
  // Additional links...
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="bg-transparent text-black p-4 flex justify-between items-center ">
      <h1 className="text-3xl font-bold">Lugetech</h1>
      <div className="hidden justify-center items-center md:flex">
        <ul className="flex justify-center items-center space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <FaBars />
      </button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-center"
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes /> {/* Close icon */}
          </button>
          <ul className="bg-white flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

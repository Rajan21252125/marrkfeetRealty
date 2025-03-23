"use client";

import React, { useState } from "react";
import { Menu, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-200 shadow-md p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Left: Search Icon (Visible on Mobile) */}
      <button className="md:hidden text-secondary-100">
        <Search size={24} />
      </button>

      {/* Center: Title */}
      <div>
        <h1 className="text-2xl font-bold text-secondary-100">Marrk Feet</h1>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-100">
          <Menu size={28} />
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`absolute z-50 top-16 left-0 w-full md:w-auto bg-primary-200 shadow-md transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-96"
        } md:static md:flex md:space-x-6 md:bg-transparent md:shadow-none md:translate-y-0`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-6 md:items-center">
          <li className="navBarItems hidden md:flex">
            <div className="flex items-center">
              <Search size={16} />
              <p className="ml-2">Search</p>
            </div>
          </li>
          <li className="navBarItems">
            Home
          </li>

          <li className="navBarItems">
            Listings
          </li>
          <li className="navBarItems">
            About
          </li>
          <li className="navBarItems">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

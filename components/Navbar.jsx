"use client";

import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-100 shadow-md py-2 px-10 flex items-center justify-between fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      {/* Left: Search Icon (Visible on Mobile) */}
      <button className="md:hidden text-white">
        <Search size={24} />
      </button>

      {/* Center: Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">Marrk Feet</h1>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Menu size={28} />
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`absolute z-50 top-[3.15rem] left-0 w-full md:w-auto bg-primary-100 shadow-md transition-transform duration-300 ease-in-out transform ${
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
            <Link href="/">Home</Link>
          </li>

          <li className="navBarItems" >
            Properties
          </li>
          <li className="navBarItems">
            <Link href="/about">About</Link>
          </li>
          <li className="navBarItems">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

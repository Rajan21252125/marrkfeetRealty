"use client";

import React, { useState } from "react";
import { Menu, Search, Filter, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <div className="bg-primary-100 shadow-md py-2 px-10 flex items-center justify-between fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    {!showSearch &&<nav className="flex items-center justify-between w-full">
      {/* Left: Search Icon (Visible on Mobile) */}
      <button onClick={() => setShowSearch(!showSearch)} className="md:hidden text-white">
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
            <button onClick={() => setShowSearch(!showSearch)} className="flex items-center">
              <Search size={16} />
              <p className="ml-2">Search</p>
            </button>
          </li>
          <li className="navBarItems">
            <Link href="/">Home</Link>
          </li>
          <li className="relative group navBarItems cursor-pointer">
            Properties
            <ul className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-out bg-primary-200 text-white shadow-lg rounded-md py-2 mt-2 w-48 z-50">
              <li className="px-4 py-2 hover:bg-primary-100 text-white">
                <Link href="/rent-properties">Rent Properties</Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary-100 text-white">
                <Link href="/selling-properties">Sale Properties</Link>
              </li>
            </ul>
          </li>
          <li className="navBarItems">
            <Link href="/about">About</Link>
          </li>
          <li className="navBarItems">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>}

    {/* Search Bar and Filters */}
    {showSearch && (
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center bg-white rounded-lg px-3 w-full md:w-1/2 shadow-md relative">
        <Search size={16} className="absolute left-3"/>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search properties..."
          className="px-4 py-2 bg-white rounded-lg focus:outline-none mx-4 w-full"
        />
        <X size={16} className="cursor-pointer absolute right-3" onClick={() => setShowSearch(false)} />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white ml-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          <option value="all">All</option>
          <option value="rent">For Rent</option>
          <option value="sale">For Sale</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
    )}
    </div>
  );
};

export default Navbar;

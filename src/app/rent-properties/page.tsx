"use client";

import React, { useState } from "react";
import PropertyCard from "../../../components/PropertyCard"; // ✅ Correct path
import { properties } from "../../../constant/propertyData";

const ITEMS_PER_PAGE = 12; // Show 12 properties per page

const SellingPropertiesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  // Get properties for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, properties.length);
  const currentProperties = properties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
        <h1 className="text-3xl text-center font-bold text-gray-800">Rent Properties</h1>
        <p className="text-gray-600 text-lg text-right mb-4">
          Showing <span className="font-semibold">{endIndex}</span> of{" "}
          <span className="font-semibold">{properties.length}</span>
        </p>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white ${
            currentPage === 1 ? "bg-secondary-100/70 cursor-not-allowed" : "bg-secondary-200/80 hover:bg-secondary-200 cursor-pointer"
          }`}
        >
          Previous
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white ${
            currentPage === totalPages ? "bg-secondary-100/70 cursor-not-allowed" : "bg-secondary-200/80 hover:bg-secondary-200 cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SellingPropertiesPage;

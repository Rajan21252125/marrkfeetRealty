"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { caraouselImage } from "../constant/image";

const Caraousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % caraouselImage.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? caraouselImage.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen bg-black/60 overflow-hidden flex items-center justify-center top-10">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={caraouselImage[index].src}
              alt={caraouselImage[index].name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Name & Address */}
        <div className="absolute bottom-14 w-full md:bottom-1/2 left-0 md:left-1/2 transform md:-translate-x-1/2 text-white p-2 md:p-4 rounded-lg">
          <h1 className="text-xl md:text-center sm:text-3xl md:text-6xl font-bold">
            Find Your Dream Home
          </h1>
          <p className="text-sm sm:text-lg md:text-xl md:text-center">
            Discover Premium Properties in Prime Locations
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 md:p-3 rounded-full text-white hover:bg-opacity-75"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} className="md:size-10" />
        </button>

        <button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 md:p-3 rounded-full text-white hover:bg-opacity-75"
          onClick={nextSlide}
        >
          <ChevronRight size={20} className="md:size-10" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {caraouselImage.map((_, i) => (
          <div
            key={i}
            className={`h-1 md:h-3 w-1 md:w-3 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Caraousel;

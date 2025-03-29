"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Caraousel from "../../components/Caraousel";
import Footer from "../../components/Footer";
import Image from "next/image";
import FeaturedProperties from "../../components/FetaureProperties";
import Testimonial from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Caraousel />

      {/* Animated Featured Properties */}
      <motion.div
        className="mx-10 lg:mx-40 xl:mx-60"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <FeaturedProperties />
      </motion.div>

      {/* Animated Section */}
      <motion.div
        className="bg-secondary-200/80 px-6 xl:px-60 py-16 flex flex-col gap-4 mt-10 lg:flex-row items-center lg:justify-between"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* Text Content with Fade-in */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">
            Sotheby’s International Realty, the one for an exceptional home and life.
          </h2>
          <div className="w-12 border-b-2 border-yellow-500 my-4"></div>
          <p className="text-gray-600 text-lg">
            Built on centuries of tradition and dedicated to innovating the luxury real estate industry,
            Sotheby’s International Realty offers transformative experiences through a global network of exceptional agents.
          </p>
        </motion.div>

        {/* Image with Scale Effect */}
        <motion.div
          className="lg:w-1/2 w-full mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            width={600}
            height={400}
            alt="Luxury Home"
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
      <Testimonial />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;

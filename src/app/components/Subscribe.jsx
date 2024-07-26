"use client";
import React from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section id="subscribe" className="bg-sky-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-[#2B383D] mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-12 font-spline text-gray-700">
            Get new offers and updates directly in your inbox.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 border border-gray-300 rounded w-full md:w-auto focus:border-sky-500 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-sky-600 text-white px-8 py-2  font-spline rounded hover:bg-sky-700 transition duration-300"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Subscribe;

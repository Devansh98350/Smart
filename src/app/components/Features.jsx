"use client";
import React from "react";
import { FaClipboardCheck, FaLaptopCode, FaChartLine } from "react-icons/fa"; // Importing icons from react-icons
import { motion } from "framer-motion"; // Importing framer-motion for animations

const features = [
  {
    title: "Select Your Track",
    description:
      "Act as interviewee, Talent Acquisition Specialist, Training and placement head",
    icon: <FaClipboardCheck className="text-sky-600 w-12 h-12" />,
  },
  {
    title: "Create Interview",
    description: "Tailored Questions and setup Interview for candidate quickly",
    icon: <FaLaptopCode className="text-sky-600 w-12 h-12" />,
  },
  {
    title: "Review & Improve",
    description:
      "Gain insights through detailed analytics and reports to enhance your outcomes.",
    icon: <FaChartLine className="text-sky-600 w-12 h-12" />,
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="bg-sky-200 rounded mt-12 py-16 ">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-spline font-medium leading-8  text-[#2B383D] mb-2"
        >
          How Smart Graders Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 font-spline mb-12"
        >
          Intuitive. Intelligent. Impactful.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                translateZ: 0,
                transformStyle: "preserve-3d",
              }}
              className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md w-full md:w-1/3 transform hover:shadow-lg hover:bg-white transition duration-300"
            >
              {feature.icon}
              <div style={{ backfaceVisibility: "hidden" }}>
                <h3 className="mt-8 text-2xl font-spline font-normal text-slate-800">
                  {feature.title}
                </h3>
                <p className="mt-6 text-base font-light leading-6 font-spline text-neutral-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

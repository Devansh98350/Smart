"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  // Define the logos with paths pointing to the public directory
  const partnerLogos = [
    "/images/home/logo_1.png",
    "/images/home/logo_2.png",
    "/images/home/logo_3.png",
    "/images/home/logo_4.png",
    "/images/home/logo_5.png",
    "/images/home/logo_6.png",
    "/images/home/logo_7.png",
    "/images/home/logo_8.png",
  ];

  return (
    <section id="partners" className="my-12 py-12 bg-sky-200 rounded shadow-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-[#2B383D]">
            Trusted by Leading Entities
          </h2>
          <p className="text-lg text-gray-700 font-spline mt-2">
            Join our network of esteemed partners who have revolutionized their
            processes with SmartGrader.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-auto transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

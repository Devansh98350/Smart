"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing icon from react-icons
import { motion } from "framer-motion"; // Importing framer-motion for animations
import Link from "next/link"; // Importing Link for navigation
import IntroVideo from "../components/IntroVideo";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-12 pt-16">
      <div className="container mx-auto px-4  flex flex-col lg:flex-row items-center">
        <div className="w-full lg:1/2  xl:w-5/12 lg:mb-0 ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex-col items-center"
          >
            <div className="w-full text-6xl font-spline font-medium text-slate-800 max-md:max-w-full max-xl:text-5xl">
              Cultivate Confidence.
              <br /> Ace Interviews & Assessment.
            </div>
            <Image
              loading="lazy"
              src="/images/home/HomeLine.png"
              className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 w-full text-lg  max-xl:text-sm leading-6  font-spline font-thin text-neutral-600 max-md:max-w-full"
          >
            Gain confidence and improve performance with precise feedback. Our
            platform leverages advanced technology to enhance interview and
            evaluation processes. Prepare smarter and excel with our AI-powered
            assessment solutions.
          </motion.p>
          <div className="flex w-full ">
            <span
              onClick={() =>
                (window.location.href =
                  "https://smart-grader-app-ts.vercel.app/")
              }
              className="bg-[#01AFF4] text-white px-4 sm:px-6 py-3 mt-6 mb-10 font-spline text-md rounded hover:bg-blue-500 transition duration-300 flex items-center  cursor-pointer "
            >
              Get Started with SmartGrader <FaArrowRight className="ml-4" />
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:1/2 xl:w-7/12  flex items-center justify-end"
        >
          <Image
            src="/images/home/hero-image.png"
            alt="Designed For Interview"
            className="w-full md:w-3/4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const OrganizationsSection = () => {
  const router = useRouter();
  const sendOrganizatopnParam = () => {
    // Perform any logout logic here, e.g., clearing authentication tokens, etc.

    // Construct the URL with query parameters
    const url = new URL("http://smart-grader-app-ts.vercel.app/signUp");
    url.searchParams.append("userType", "organization");

    // Redirect to the URL with parameters
    window.location.href = url.toString();
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="container mx-auto flex flex-col mt-12 max-w-[1250px] lg:flex-row-reverse items-center  rounded-md px-4 py-4"
      variants={cardVariants}
    >
      <div className="md:w-2/3 lg:2/3 xl:w-1/2 mx-auto   flex items-center">
        <motion.img
          loading="lazy"
          src="/images/home/Organisation-Banner.png"
          className="w-full rounded-md h-full lg:px-8 object-cover"
          alt="Organization Banner"
        />
      </div>
      <div className="flex flex-col justify-end w-full lg:w-1/2 text-slate-800 px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-spline  text-[#2B383D] font-medium  leading-tight">
          AI-Powered Hiring for <br /> Organizations
        </h2>
        <div className="flex w-full md:mx-auto  justify-center lg:justify-start">
          <img
            loading="lazy"
            src="/images/home/HomeLine.png"
            className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
          />
        </div>

        <div className="my-4 py-4 text-left lg:text-left">
          <div className="flex items-center gap-2 lg:justify-start">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-semibold text-slate-700">
              Efficient Screening
            </span>
          </div>
          <p className="font-light px-2">
            Quickly identify the best candidates with AI-driven insights.
          </p>
          <div className="flex items-center gap-2 mt-4  lg:justify-start">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-semibold text-slate-700">
              Customizable Interviews
            </span>
          </div>
          <p className="font-light px-2">
            Tailor interview questions to fit your company’s needs.
          </p>
          <div className="flex items-center gap-2 mt-4 lg:justify-start">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-semibold text-slate-700">
              In-depth Analytics
            </span>
          </div>
          <p className="font-light px-2  ">
            Make informed hiring decisions with comprehensive reporting.
          </p>
        </div>
        {/* Content including ticks and texts */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#01AFF4] text-white px-2 sm:px-6 py-3 mt-6 mb-10 font-spline text-sm rounded hover:bg-blue-500 transition duration-300 flex items-center cursor-pointer w-fit"
          onClick={sendOrganizatopnParam}
        >
          <span>Optimize Your Hiring Process</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrganizationsSection;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

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

const InstitutionsSection = () => {
  const router = useRouter();

  const sendEducationParam = () => {
    // Perform any logout logic here, e.g., clearing authentication tokens, etc.

    // Construct the URL with query parameters
    const url = new URL("/signUp", window.location.origin); // Use relative URL with origin
    url.searchParams.append("userType", "educational");

    // Redirect to the URL with parameters
    router.push(url.toString());
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="container mx-auto flex flex-col mt-12 lg:flex-row gap-5 max-w-[1350px] px-4"
      variants={cardVariants}
      style={{ marginBottom: "20px" }}
    >
      <div className="md:w-2/3 lg:2/3 xl:w-1/2 mx-auto flex items-start mt-4">
        <Image
          loading="lazy"
          src="/images/home/institutions-banner.png"
          className="w-full rounded-md lg:px-12 object-cover"
          alt="Institutions Banner"
          width={1200} // Add width and height for optimization
          height={600}
        />
      </div>
      <div className="flex flex-col lg:justify-center w-full lg:w-1/2 text-slate-800">
        <div className="w-full lg:w-10/12 md:mx-auto px-4 py-4">
          <h2 className="text-3xl md:text-4xl font-spline font-medium text-[#2B383D] leading-tight">
            Robust Testing Platform for Educational Institutions
          </h2>
          <div className="flex w-full md:mx-auto px-4 justify-center lg:justify-end">
            <Image
              loading="lazy"
              src="/images/home/HomeLine.png"
              className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
              alt="Home Line"
              width={307} // Add width and height for optimization
              height={21}
            />
          </div>

          <div className="my-4 py-4">
            <div className="flex items-center gap-2">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24} // Add width and height for optimization
                height={24}
              />
              <span className="font-semibold text-slate-700">
                Secure Testing Environment
              </span>
            </div>
            <p className="font-light px-2">
              Maintain academic integrity with supervised exams.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24} // Add width and height for optimization
                height={24}
              />
              <span className="font-semibold text-slate-700">
                Comprehensive Assessments
              </span>
            </div>
            <p className="font-light px-2">
              Test a wide range of subjects with customizable questions.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24} // Add width and height for optimization
                height={24}
              />
              <span className="font-semibold text-slate-700">
                Automated Grading
              </span>
            </div>
            <p className="font-light px-2">
              Save time with accurate and fair AI grading.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#01AFF4] text-white px-2 sm:px-6 py-3 mt-6 mb-10 font-spline text-sm rounded hover:bg-blue-500 transition duration-300 flex items-center cursor-pointer w-fit"
            onClick={sendEducationParam}
          >
            <span>Enhance Academic Assessment</span>
            <FaArrowRight className="ml-2" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstitutionsSection;

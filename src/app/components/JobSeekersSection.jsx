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

const JobSeekersSection = () => {
  const router = useRouter();

  const sendIndividualParam = () => {
    // Construct the URL with query parameters
    const url = "/signUp?userType=individual";

    // Use router to navigate
    router.push(url);
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="container mx-auto flex flex-col px-4 mt-12 lg:flex-row gap-5 max-w-[1350px]"
      variants={cardVariants}
      style={{ marginBottom: "20px" }}
    >
      <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 mx-auto flex items-start my-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            loading="lazy"
            src="/images/home/job-seekers-banner.png"
            className="w-full rounded-md lg:px-12 object-cover"
            alt="Job Seekers Banner"
            width={960} // Adjust width as necessary
            height={640} // Adjust height as necessary
          />
        </motion.div>
      </div>
      <div className="flex flex-col lg:justify-center w-full lg:w-1/2 text-slate-800">
        <div className="w-full lg:w-10/12 md:mx-auto px-4 py-4">
          <h2 className="text-3xl md:text-4xl font-spline font-medium text-[#2B383D] leading-tight">
            Tailored Interview <br /> Preparation for Job Seekers
          </h2>
          <div className="flex w-full md:mx-auto px-4 justify-center lg:justify-end">
            <Image
              loading="lazy"
              src="/images/home/HomeLine.png"
              className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
              alt="Line"
              width={307}
              height={21}
            />
          </div>

          {/* Content including ticks and texts */}
          <div className="my-4 py-4">
            <div className="flex items-center gap-3">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24}
                height={24}
              />
              <span className="font-semibold text-slate-700">
                Realistic Mock Interviews
              </span>
            </div>
            <p className="font-light px-2">
              Experience job-like interview scenarios and questions.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24}
                height={24}
              />
              <span className="font-semibold text-slate-700">AI Feedback</span>
            </div>
            <p className="font-light px-2">
              Receive instant, AI-driven feedback on your answers and delivery.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                loading="lazy"
                src="/images/home/rounded-tick-icon.png"
                className="w-6 h-6"
                alt="Tick Icon"
                width={24}
                height={24}
              />
              <span className="font-semibold text-slate-700">
                Progress Tracking
              </span>
            </div>
            <p className="font-light px-2">
              Watch your interview skills improve with detailed analytics.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#01AFF4] text-white px-2 sm:px-6 py-3 mt-6 mb-10 font-spline text-sm rounded hover:bg-blue-500 transition duration-300 flex items-center cursor-pointer w-fit"
            onClick={sendIndividualParam}
          >
            <span>Start Preparing Today</span>
            <FaArrowRight className="ml-2" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobSeekersSection;

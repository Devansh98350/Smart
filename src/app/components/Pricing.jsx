"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"; // Importing icons from react-icons
import ContactUs from "../components/ContactUs";
const Pricing = () => {
  const [contactUs, setContactUs] = useState(false);

  const handleClose = () => {
    setContactUs(false);
    // Optionally, you can navigate back to the homepage or another page
  };
  const pricingPlans = [
    {
      plan: "Individual",
      price: "Free",
      features: [
        "Access to AI-driven assessments",
        "Personalized feedback",
        "Progress tracking",
        "Limited to 5 assessments per month",
      ],
    },
    {
      plan: "Educational Institutes",
      price: "₹45,000 / Month",
      features: [
        "Unlimited assessments",
        "Detailed analytics",
        "Customizable interview questions",
        "Student progress tracking",
        "Dedicated support",
      ],
    },
    {
      plan: "Startups",
      price: "₹22,500 / Month",
      features: [
        "Everything in Educational Institutes Plan",
        "Employer branding features",
        "Customizable job descriptions",
        "Resume and candidate evaluation",
        "Interview simulation and feedback",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-sky-200 rounded  my-12 py-12">
      <ContactUs open={contactUs} onClose={handleClose} />
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-[#2B383D]">
            Transparent Pricing for Every Need
          </h2>
          <p className="text-lg text-gray-700 font-spline mt-2">
            Choose a plan that fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pricingPlans.map((pricing, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:bg-sky-50 transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ minHeight: "400px" }} // Set a minimum height for consistent card size
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-sky-600 font-spline text-left">
                  {pricing.plan}
                </h3>
                <p className="text-2xl font-bold mb-4 text-gray-900 font-spline text-left">
                  {pricing.price}
                </p>
                <ul className="mb-4 text-gray-700 text-left">
                  {pricing.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center font-spline mb-2"
                    >
                      <FaCheckCircle className="text-sky-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                // onClick={()=>window.location.href = 'http://smart-grader-app-ts.vercel.app/'}
                onClick={() => setContactUs(true)}
                className="bg-[#01AFF4] text-white px-4 py-3 text-sm font-spline rounded hover:bg-blue-500 flex items-center justify-center transition-transform duration-300 mt-auto cursor-pointer "
              >
                <span className="font-spline">Get Started</span>
                <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

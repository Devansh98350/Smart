"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import { FaAsterisk } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Demo = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappConsent: false,
  });
  const [selectedJobRequisition, setSelectedJobRequisition] = useState(null);
  const [selectedSourcingCandidate, setSelectedSourcingCandidate] =
    useState(null);

  const jobRequisitionOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ];

  const sourcingCandidateOptions = [
    { value: "internal", label: "Internal" },
    { value: "external", label: "External" },
    { value: "both", label: "Both" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #3182CE" : "1px solid #E2E8F0",
      boxShadow: state.isFocused ? "0 0 0 1px #3182CE" : "none",
      "&:hover": {
        border: "1px solid #3182CE",
      },
    }),
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formSubmissionData = {
      ...formData,
      jobRequisitions: selectedJobRequisition,
      sourcingCandidates: selectedSourcingCandidate,
    };

    try {
      const response = await axios.post("/api/send-email", formSubmissionData);
      if (response.data.success === true) {
        toast.success(
          "Thank you for registering! We will be in touch shortly.",
          {
            theme: "light",
          }
        );
      } else {
        toast.error("Failed to register. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to register. Please try again later.");
    }
    // toast.dismiss(); // Close any existing toast messages
    // Reset form data
    setFormData({
      name: "",
      email: "",
      whatsappConsent: false,
    });
    setSelectedJobRequisition(null);
    setSelectedSourcingCandidate(null);

    onClose(); // Close modal after form submission
  };

  useEffect(() => {
    document.body.style.overflow = open ? "auto" : "auto";
  }, [open]);

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={onClose}
        center
        styles={{
          modal: {
            maxWidth: "1000px",
            width: "90%",
            borderRadius: "5px",
            padding: "1rem",
            overflowY: "auto",
          },
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px", // Ensures some space around the modal on small screens
          },
        }}
      >
        <div className="flex flex-col md:flex-row px-2 sm:px-5 py-10 rounded-sm">
          <div className="md:w-1/2 flex flex-col bg-sky-200 rounded p-4 sm:px-4">
            <img
              src="images/home/smart-logo.png"
              alt="Smart Grader Logo"
              className="w-32 lg:w-44"
            />
            <div>
              <div className="text-gray-600 font-spline font-semibold text-md sm:text-lg my-5">
                Register for our Demo
              </div>
              <div className="text-gray-600 font-spline font-bold text-2xl sm:text-3xl mb-10 md:w-10/12">
                Discover the Power of AI Driven Recruiting Automation with
                SmartGrader
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-2 sm:px-4">
            <h2 className="text-lg text-gray-600 font-spline font-bold sm:text-2xl mb-4">
              See Smarter AI Recruiting in Action
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center">
                <span className="mr-2 text-gray-700 font-spline font-semibold">
                  Name
                </span>
                <FaAsterisk size={10} color="red" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-3 leading-4 rounded-md border border-solid border-neutral-400 w-full focus:border-neutral-500 focus:ring-neutral-500 focus:outline-none"
              />
              <div className="flex items-center">
                <span className="mr-2 text-gray-700 font-spline font-semibold">
                  Work Email
                </span>
                <FaAsterisk size={10} color="red" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Work Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-3 leading-4 rounded-md border border-solid border-neutral-400 w-full focus:border-neutral-500 focus:ring-neutral-500 focus:outline-none"
              />
              <div className="flex items-center">
                <span className="mr-2 text-gray-700 font-spline font-semibold">
                  Monthly Job Requisitions?
                </span>
                <FaAsterisk size={10} color="red" />
              </div>
              <Select
                value={selectedJobRequisition}
                onChange={setSelectedJobRequisition}
                options={jobRequisitionOptions}
                placeholder="Monthly job requisitions?*"
                className="w-full"
                styles={customStyles}
              />
              <div className="flex items-center">
                <span className="mr-2 text-gray-700 font-spline font-semibold">
                  Primarily sourcing candidates:
                </span>
                <FaAsterisk size={10} color="red" />
              </div>
              <Select
                value={selectedSourcingCandidate}
                onChange={setSelectedSourcingCandidate}
                options={sourcingCandidateOptions}
                placeholder="Primarily sourcing candidates:*"
                className="w-full"
                styles={customStyles}
              />
              <div className="flex justify-start items-start">
                <input
                  type="checkbox"
                  name="whatsappConsent"
                  checked={formData.whatsappConsent}
                  onChange={handleChange}
                  className="mr-2 mt-1 mb-5"
                />
                <span className="text-gray-600 font-spline font-light text-md">
                  I wish to receive further updates and confirmation via
                  WhatsApp.
                </span>
              </div>
              <div className="text-gray-600 font-spline font-extralight text-xs">
                By sharing your contact details, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-blue-500"
                >
                  privacy policy
                </a>
                .
              </div>
              <button
                type="submit"
                className="bg-[#01AFF4] text-white px-2 sm:px-6 py-3 mt-6 mb-10 font-spline text-sm rounded hover:bg-blue-500 transition duration-300 flex cursor-pointer w-full sm:w-4/5 lg:w-3/5 justify-center items-center"
              >
                <div className="font-spline font-medium">Get a Demo</div>
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Demo;
